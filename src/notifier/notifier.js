const { error } = require('dotenv').config()

if (error) {
  throw error
}

const TEST_ACCS = (process.env.TEST_ACCS || '').split(',')

const alerter = require('alerter')

const Telegram = require('telegraf/telegram')
const { getTimeZoneOffsetsMap } = require('common/getTimeZoneOffsetsMap')
const {
  DEFAULT_TIMEZONE_OFFSET,
  convertMatchesToFeed,
  convertUnixTimestampToDateTime,
} = require('common/formatMatches')
const { getUpcomingMatches } = require('common/manageMatches')
const { getActiveUsers, updateUser } = require('common/manageUsers')
const { splitMatchesByFilter } = require('./utils')

async function notify() {
  const users = await getActiveUsers()

  if (!Object.keys(users).length) {
    alerter.warn('There is no active users')
    return
  }

  const matches = await getUpcomingMatches()

  if (!matches.length) {
    alerter.warn('There is no upcoming matches')
    return
  }

  const timeZoneOffsetsMap = await getTimeZoneOffsetsMap(users)

  const rawFeedList = splitMatchesByFilter(matches)
  const telegram = new Telegram(process.env.BOT_TOKEN)

  Object.entries(users).forEach(
    ([
      id,
      { filter, location = {}, seenEmptyMessage, seenCustomizeLocationMessage },
    ]) => {
      if (process.env.NODE_ENV !== 'production' && !TEST_ACCS.includes(id)) {
        return
      }

      const timeZoneOffset =
        timeZoneOffsetsMap[location.timeZoneId] || DEFAULT_TIMEZONE_OFFSET

      const userMatches = (rawFeedList[filter] || []).map(
        ({ unixTimestamp, ...rest }) => {
          const datetime = convertUnixTimestampToDateTime(
            unixTimestamp,
            timeZoneOffset * 1000,
          )

          return {
            ...rest,
            datetime,
          }
        },
      )

      const chatId = Number(id)
      // eslint-disable-next-line no-unused-vars
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

      if (!message) {
        if (seenEmptyMessage) {
          return
        }

        message = `There are no ${filter}-stars matches today. And I won't spam you with this message every morning.\n\nNext time just send /upcoming if no morning notification.`
        disable_notification = true
        seenEmptyMessage = true
      }

      telegram
        .sendMessage(chatId, message, {
          disable_notification,
          disable_web_page_preview: true,
          parse_mode: 'HTML',
        })
        .then(() => {
          // TODO: check it doesn't update user if a message isn't empty and seenEmptyMessage is true
          if (seenEmptyMessage) {
            return updateUser(id, { seenEmptyMessage: true })
          }
        })
        // Uncomment after alpha
        // .then(sendCustomizeLocationMessage)
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
