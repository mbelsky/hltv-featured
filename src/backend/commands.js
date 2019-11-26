const { convertToMessage } = require('common/formatMatches')
const { setFilter } = require('common/manageUsers')
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
  await ctx.reply(
    `
${HELP_MSG}

By default I will send you notifications about two or more ⭐️ matches. To get less or more, please use /setfilter to update your filter.
`.trim(),
    {
      disable_web_page_preview: true,
      parse_mode: 'Markdown',
    },
  )

  ctx.replyWithChatAction('typing')

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
