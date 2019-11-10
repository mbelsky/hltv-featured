const Scene = require('telegraf/scenes/base')
const {
  SET_FILTER_MSG_ENTER,
  SET_FILTER_MSG_LEAVE,
  SET_FILTER_REPLY_MARKUP,
} = require('../consts')
const setFilter = require('../middlewares/setFilter')

const name = 'setfilter'

const scene = new Scene(name)
scene.enter((ctx) =>
  ctx.reply(SET_FILTER_MSG_ENTER, {
    reply_markup: SET_FILTER_REPLY_MARKUP,
  }),
)
scene.leave((ctx) => ctx.reply(SET_FILTER_MSG_LEAVE))
scene.on('message', setFilter)

module.exports = {
  name,
  scene,
}
