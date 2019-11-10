const {
  FILTER_OPTIONS,
  SET_FILTER_MSG_ENTER,
  SET_FILTER_REPLY_MARKUP,
} = require('../consts')

const setFilter = (ctx) => {
  if (FILTER_OPTIONS.includes(ctx.message.text)) {
    // TODO: Save to db
    ctx.scene.leave()
    return
  } else {
    ctx.reply(`Unsupported value. ${SET_FILTER_MSG_ENTER}`, {
      reply_markup: SET_FILTER_REPLY_MARKUP,
    })
  }
}

module.exports = setFilter
