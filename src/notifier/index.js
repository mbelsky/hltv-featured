const { error } = require('dotenv').config()

if (error) {
  throw error
}

const TEST_ACCS = (process.env.TEST_ACCS || '').split(',')

const alerter = require('alerter')

const Telegram = require('telegraf/telegram')
const { getUpcomingMatches } = require('common/manageMatches')
const { getActiveUsers, updateUser } = require('common/manageUsers')
const { getMatchesFeed } = require('./utils')

;(async function main() {
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

  const feed = getMatchesFeed(matches)
  const telegram = new Telegram(process.env.BOT_TOKEN)

  Object.entries(users).forEach(([id, { filter, seenEmptyMessage }]) => {
    if (process.env.NODE_ENV !== 'production' && !TEST_ACCS.includes(id)) {
      return
    }

    let message = feed[filter]
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
      .sendMessage(Number(id), message, {
        disable_notification,
        disable_web_page_preview: true,
        parse_mode: 'Markdown',
      })
      .then(() => {
        if (seenEmptyMessage) {
          return updateUser(id, { seenEmptyMessage: true })
        }
      })
      .catch((e = {}) => {
        if (403 !== e.code) {
          alerter.error('chat id: ' + id, e)
        }
      })
  })
})()
