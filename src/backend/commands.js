const { setFilter } = require('common/manageUsers')
const { HELP_MSG } = require('./consts')

const help = (ctx) =>
  ctx.reply(
    `${HELP_MSG}

You can control me by sending these commands:

/setfilter – set minimum stars count for a match
/stop – stop getting notifications`,
    { disable_web_page_preview: true, parse_mode: 'Markdown' },
  )

const stop = async (ctx) => {
  // TODO: Wrap in try catch
  await Promise.all([
    ctx.replyWithChatAction('typing'),
    setFilter({ chatId: ctx.chat.id, filter: Number.MAX_SAFE_INTEGER }),
  ])
  ctx.reply('You may subscribe again with /start')
}

module.exports = {
  help,
  stop,
}
