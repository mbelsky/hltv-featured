const Scene = require('telegraf/scenes/base')
const {
  SET_FILTER_MSG_LEAVE,
  SET_FILTER_REPLY_MARKUP,
  SET_FILTER_REPLY_MARKUP_REMOVE,
} = require('../consts')
const setFilter = require('../middlewares/setFilter')

const enterMessage = `
I can notify you about interesting upcoming matches listed on [https://www.hltv.org/matches/](https://www.hltv.org/matches/)

[HLTV.org](https://www.hltv.org) uses a ⭐️ system to feature matches. So let's configure your feed.
In how high-rated matches are you interested? Please choose a minimal ⭐️ count for a match`.trim()

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
