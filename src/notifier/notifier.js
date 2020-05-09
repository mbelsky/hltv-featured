const { error } = require('dotenv').config()

if (error) {
  throw error
}

const TEST_ACCS = (process.env.TEST_ACCS || '').split(',')

const alerter = require('@hltvf/monitoring/alerter')
const log = require('./logger')()

const Telegram = require('telegraf/telegram')
const {
  DEFAULT_TIMEZONE_OFFSET,
  convertMatchesToFeed,
  convertUnixTimestampToDateTime,
} = require('common/formatMatches')
const { updateUser } = require('common/manageUsers')
const { fetchData } = require('./fetchData')
const { splitMatchesByFilter } = require('./utils')

const mapRawFeed = (timeZoneOffset, { unixTimestamp, ...rest }) => {
  const datetime = convertUnixTimestampToDateTime(
    unixTimestamp,
    timeZoneOffset * 1000,
  )

  return {
    ...rest,
    datetime,
  }
}

async function notify() {
  log('Notifier has started')

  const data = await fetchData()

  if (!data) {
    return
  }

  const { matches, timeZoneOffsetsMap, users } = data

  log(`There are ${Object.keys(timeZoneOffsetsMap)} time zone ids`)

  const rawFeedList = splitMatchesByFilter(matches)
  const telegram = new Telegram(process.env.BOT_TOKEN)

  // TODO: Replace sync forEach with Promises
  Object.entries(users).forEach(
    ([
      id,
      {
        favorites,
        filter,
        location = {},
        seenEmptyMessage,
        seenCustomizeLocationMessage,
      },
    ]) => {
      if (process.env.NODE_ENV !== 'production' && !TEST_ACCS.includes(id)) {
        return
      }

      const timeZoneOffset =
        timeZoneOffsetsMap[location.timeZoneId] || DEFAULT_TIMEZONE_OFFSET

      const userMatches = (rawFeedList[filter] || []).map((match) =>
        mapRawFeed(timeZoneOffset, match),
      )
      const chatId = Number(id)

      const sendFavoriteTeamsMatchesMessage = async () => {
        if (!Array.isArray(favorites) || 0 === favorites.length) {
          return
        }

        // TODO: Replace favorites with Map/Set

        const matches = (rawFeedList[0] || [])
          .filter(({ title }) => {
            const teams = title.toLowerCase().split(' vs ')
            const isFavoriteTeamMatch =
              0 !== teams.filter((team) => favorites.includes(team)).length

            return isFavoriteTeamMatch
          })
          .map((match) => mapRawFeed(timeZoneOffset, match))

        if (0 === matches.length) {
          return
        }

        const message =
          '<b>Your favorite teams matches:</b>\n\n' +
          convertMatchesToFeed(matches)

        return telegram.sendMessage(chatId, message, {
          disable_web_page_preview: true,
          parse_mode: 'HTML',
        })
      }

      const sendCustomizeLocationMessage = async () => {
        const shouldSendMessage =
          userMatches.length > 0 &&
          undefined === location.timeZoneId &&
          !seenCustomizeLocationMessage

        if (!shouldSendMessage) {
          return
        }

        const customizeLocationMessage =
          'You may change matches timezone for your feed. Just tap on the 📎 attachment button, choose Location and send your city coordinates as a message.'

        await telegram.sendMessage(chatId, customizeLocationMessage)
        await updateUser(id, { seenCustomizeLocationMessage: true })
      }

      let message = convertMatchesToFeed(userMatches)
      let disable_notification = false
      let setUserSeenEmptyMessage = () => undefined

      Promise.resolve()
        .then(() => {
          if (!message) {
            if (seenEmptyMessage) {
              return
            }

            message = `There are no ${filter}-stars matches today. And I won't spam you with this message every morning.\n\nNext time just send /upcoming if no morning notification.`
            disable_notification = true
            seenEmptyMessage = true
            setUserSeenEmptyMessage = () =>
              updateUser(id, { seenEmptyMessage: true }).catch((e) =>
                alerter.error('chat id: ' + id, e),
              )
          }

          return telegram.sendMessage(chatId, message, {
            disable_notification,
            disable_web_page_preview: true,
            parse_mode: 'HTML',
          })
        })
        .then(sendFavoriteTeamsMatchesMessage)
        // Don't replace with `.then(setUserSeenEmptyMessage)` bcs setUserSeenEmptyMessage is mutable
        .then(() => setUserSeenEmptyMessage())
        .then(sendCustomizeLocationMessage)
        .catch((e = {}) => {
          if (403 !== e.code) {
            alerter.error('chat id: ' + id, e)
          }
        })
    },
  )
}

if (require.main === module) {
  notify()
} else {
  module.exports = notify
}
