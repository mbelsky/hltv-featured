const alerter = require('alerter')
const { convertToMessage } = require('common/formatMatches')
const { initUser, setFilter } = require('common/manageUsers')
const { HELP_MSG } = require('./consts')
const { getCachedMatches } = require('./utils')

const help = (ctx) =>
  ctx.reply(
    `${HELP_MSG}

You can control me by sending these commands:

/setfilter – set minimum stars count for a match
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

I will send you notifications about matches with two or more ⭐️. To get less or more, please use /setfilter to update your filter.
`.trim(),
    {
      disable_web_page_preview: true,
      parse_mode: 'Markdown',
    },
  )

  const matches = await getCachedMatches()
  const feed = matches.map(convertToMessage).join('\n\n')

  await ctx.reply(`A few today matches:\n\n${feed}`, {
    disable_web_page_preview: true,
    parse_mode: 'Markdown',
  })
}

const stop = async (ctx) => {
  await Promise.all([
    ctx.replyWithChatAction('typing'),
    setFilter({ chatId: ctx.chat.id, filter: Number.MAX_SAFE_INTEGER }),
  ])
  ctx.reply('You may subscribe again with /start')
}

module.exports = {
  help,
  start,
  stop,
}
