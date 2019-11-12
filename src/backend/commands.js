const { setFilter } = require('hltv-firebase-helper/manageUsers')

const help = (ctx) =>
  ctx.reply(
    `Help and start.
/setfilter – change matches filter
/stop – stop getting notifications`,
  )

const stop = async (ctx) => {
  // sendChatAction

  // TODO: Wrap in try catch
  await setFilter({ chatId: ctx.chat.id, filter: Number.MAX_SAFE_INTEGER })
  ctx.reply('You may subscribe again with /start')
}

module.exports = {
  help,
  stop,
}
