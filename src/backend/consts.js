const SET_FILTER_MSG_ENTER = 'Please choose an option'
const SET_FILTER_MSG_LEAVE = `Done! Your filter has been updated`
const SET_FILTER_REPLY_MARKUP = {
  keyboard: [
    ['⭐️', '⭐️⭐️', '⭐️⭐️⭐️'],
    ['⭐️⭐️⭐️⭐️ and more'],
    ['Notify me about all matches'],
  ],
  one_time_keyboard: true,
  resize_keyboard: true,
}
const SET_FILTER_REPLY_MARKUP_REMOVE = {
  remove_keyboard: true,
}
const FILTER_OPTIONS = SET_FILTER_REPLY_MARKUP.keyboard.flat()

module.exports = {
  FILTER_OPTIONS,
  HELP_MSG:
    'I can notify you about interesting upcoming matches listed on [https://www.hltv.org/matches/](https://www.hltv.org/matches/)',
  SET_FILTER_MSG_ENTER,
  SET_FILTER_MSG_LEAVE,
  SET_FILTER_REPLY_MARKUP,
  SET_FILTER_REPLY_MARKUP_REMOVE,
}
