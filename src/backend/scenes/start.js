const Scene = require('telegraf/scenes/base')
const {
  HELP_MSG,
  SET_FILTER_MSG_LEAVE,
  SET_FILTER_REPLY_MARKUP,
  SET_FILTER_REPLY_MARKUP_REMOVE,
} = require('../consts')
const setFilter = require('../middlewares/setFilter')

const enterMessage = `
${HELP_MSG}

[HLTV.org](https://www.hltv.org) uses a ⭐️ system to feature upcoming matches. So let's configure your feed.
What is the minimal rating for a match you want to be notified about? Please choose minimal ⭐️ count`.trim()

const name = 'start'

const scene = new Scene(name)
scene.enter((ctx) =>
  ctx.reply(enterMessage, {
    disable_web_page_preview: true,
    parse_mode: 'Markdown',
    reply_markup: SET_FILTER_REPLY_MARKUP,
  }),
)
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
