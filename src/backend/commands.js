const alerter = require('alerter')
const { getTimezone } = require('common/getTimezone')
const { initUser, setFilter, updateUser } = require('common/manageUsers')
const { HELP_MSG } = require('./consts')
const { getCachedMatches, convertMatchesToFeed } = require('./utils')

const help = (ctx) =>
  ctx.reply(
    `${HELP_MSG}

You can control me by sending these commands:

/setfilter – set minimum stars count for a match
/upcoming – get three high-rated today upcoming matches
/stop – stop getting notifications`,
    { disable_web_page_preview: true, parse_mode: 'Markdown' },
  )

const start = async (ctx) => {
  ctx.replyWithChatAction('typing')

  try {
    await initUser({ chatId: ctx.chat.id })
  } catch (e) {
    alerter.error(e)
    return ctx.reply(`😢 Sorry, something went wrong. Please, try again /start`)
  }

  await ctx.reply(
    `
${HELP_MSG}

Every morning I will send you notifications about matches with two or more ⭐️. To get less or more, please use /setfilter to update your filter.
`.trim(),
    {
      disable_web_page_preview: true,
      parse_mode: 'Markdown',
    },
  )

  const matches = await getCachedMatches()
  const feed = convertMatchesToFeed(matches)

  if (feed) {
    await ctx.reply(`A few today matches:\n\n${feed}`, {
      disable_web_page_preview: true,
      parse_mode: 'HTML',
    })
  }
}

const stop = async (ctx) => {
  await Promise.all([
    ctx.replyWithChatAction('typing'),
    setFilter({ chatId: ctx.chat.id, filter: Number.MAX_SAFE_INTEGER }),
  ])
  ctx.reply('You may subscribe again with /start')
}

const upcoming = async (ctx) => {
  const [matches] = await Promise.all([
    getCachedMatches(),
    ctx.replyWithChatAction('typing'),
  ])
  const feed = convertMatchesToFeed(matches)
  const message = feed
    ? `Upcoming today matches:\n\n${feed}`
    : `There are no upcoming matches today`

  await ctx.reply(message, {
    disable_web_page_preview: true,
    parse_mode: 'HTML',
  })
}

const location = async (ctx) => {
  const { date: timestamp, location } = ctx.message
  const { latitude, longitude } = location

  ctx.replyWithChatAction('typing')

  const { timeZoneId, ...rest } = await getTimezone({
    latitude,
    longitude,
    timestamp,
  })

  if ('undefined' === typeof timeZoneId) {
    alerter.error(
      new Error(
        'getTimezone returns undefined.\n' +
          JSON.stringify({ latitude, longitude, ...rest }),
      ),
    )

    return ctx.reply('Please try again later')
  }

  await updateUser(ctx.chat.id, {
    location: { latitude, longitude, timeZoneId },
  })

  return ctx.reply('Your timezone has changed to ' + timeZoneId)
}

module.exports = {
  help,
  location,
  start,
  stop,
  upcoming,
}
