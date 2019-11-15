const { error } = require('dotenv').config()

if (error) {
  throw error
}

const Telegram = require('telegraf/telegram')
const { getUpcomingMatches } = require('hltv-firebase-helper/manageMatches')
const { getActiveUsers } = require('hltv-firebase-helper/manageUsers')
const { getMatchesFeed } = require('./utils')

;(async function main() {
  const users = await getActiveUsers()

  if (!Object.keys(users).length) {
    return
  }

  const matches = await getUpcomingMatches()

  if (!matches.length) {
    return
  }

  const feed = getMatchesFeed(matches)
  const telegram = new Telegram(process.env.BOT_TOKEN)

  Object.entries(users).forEach(([id, { filter }]) =>
    telegram.sendMessage(Number(id), feed[filter], {
      disable_web_page_preview: true,
      parse_mode: 'Markdown',
    }),
  )
})()
