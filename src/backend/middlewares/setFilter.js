const {
  setFilter: writeFilterValue,
} = require('hltv-firebase-helper/manageUsers')
const {
  FILTER_OPTIONS,
  SET_FILTER_MSG_ENTER,
  SET_FILTER_REPLY_MARKUP,
} = require('../consts')
const { getFilterValue } = require('./utils')

const setFilter = async (ctx) => {
  const message = ctx.message.text
  if (!FILTER_OPTIONS.includes(message)) {
    return ctx.reply(`Unsupported value. ${SET_FILTER_MSG_ENTER}`, {
      reply_markup: SET_FILTER_REPLY_MARKUP,
    })
  }

  // sendChatAction

  const filter = getFilterValue(message)
  // TODO: Wrap in try catch
  await writeFilterValue({ chatId: ctx.chat.id, filter })

  ctx.scene.leave()
}

module.exports = setFilter
