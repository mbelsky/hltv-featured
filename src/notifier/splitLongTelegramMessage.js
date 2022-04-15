const { MESSAGE_TYPES } = require('./consts')
const MAX_TELEGRAM_MESSAGE_LENGTH = 10000

const splitFunctions = {
  [MESSAGE_TYPES.favoriteTeamsMatches]: splitMatchesMessage,
  [MESSAGE_TYPES.featuredMatches]: splitMatchesMessage,
}

exports.splitLongTelegramMessage = (message) => {
  const text = message.getText()

  if (text.length <= MAX_TELEGRAM_MESSAGE_LENGTH) {
    return [text]
  }

  const type = message.getType()
  const splitFn = splitFunctions[type]

  if (!splitFn) {
    throw new Error(`Split function is not defined. Message type='${type}'`)
  }

  return splitFn(text)
}

function splitMatchesMessage(text) {
  if (text.length <= MAX_TELEGRAM_MESSAGE_LENGTH) {
    return [text]
  }

  const substring = text.substring(0, MAX_TELEGRAM_MESSAGE_LENGTH).trim()
  const index = substring.search(/\n\n[^\n]+$/)

  if (-1 === index) {
    throw new Error('Unsplitable message: ' + text)
  }

  return [
    substring.substring(0, index),
    ...splitMatchesMessage(text.substring(index).trim()),
  ]
}
