const Scene = require('telegraf/scenes/base')
const {
  SET_FILTER_MSG_ENTER,
  SET_FILTER_MSG_LEAVE,
  SET_FILTER_REPLY_MARKUP,
  SET_FILTER_REPLY_MARKUP_REMOVE,
} = require('../consts')
const setFilter = require('../middlewares/setFilter')

const name = 'setfilter'

const scene = new Scene(name)
scene.enter((ctx) =>
  ctx.reply(SET_FILTER_MSG_ENTER, {
    reply_markup: SET_FILTER_REPLY_MARKUP,
  }),
)
// TODO: fix reply_markup duplication for scenes leave
scene.leave((ctx) =>
  ctx.reply(SET_FILTER_MSG_LEAVE, {
    reply_markup: SET_FILTER_REPLY_MARKUP_REMOVE,
  }),
)
scene.on('message', setFilter)

module.exports = {
  name,
  scene,
}
