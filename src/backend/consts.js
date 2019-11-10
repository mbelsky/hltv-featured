const SET_FILTER_MSG_ENTER = 'Please choose an option'
const SET_FILTER_MSG_LEAVE = `Done! Your filter has been updated`
const SET_FILTER_REPLY_MARKUP = {
  keyboard: [
    ['Notify me about all matches'],
    ['⭐️', '⭐️⭐️', '⭐️⭐️⭐️'],
    ['⭐️⭐️⭐️⭐️ and more'],
  ],
  one_time_keyboard: true,
  resize_keyboard: true,
}
const FILTER_OPTIONS = SET_FILTER_REPLY_MARKUP.keyboard.flat()

module.exports = {
  FILTER_OPTIONS,
  SET_FILTER_MSG_ENTER,
  SET_FILTER_MSG_LEAVE,
  SET_FILTER_REPLY_MARKUP,
}
