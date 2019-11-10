const help = (ctx) =>
  ctx.reply(
    `Help and start.
/setfilter – change matches filter
/stop – stop getting notifications`,
  )

const stop = (ctx) => {
  // update status
  // remove db record
  // return successful message
  ctx.reply('You may subscribe again with /start')
}

module.exports = {
  help,
  stop,
}
