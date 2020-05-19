const { MESSAGE_TYPES } = require('../consts')
const { hasMessageWithMatches } = require('./hasMessageWithMatches')

exports.CustomLocationMessage = class CustomLocationMessage {
  #text

  constructor({ text }) {
    this.#text = text
  }

  getType() {
    return MESSAGE_TYPES.customLocation
  }

  getText() {
    return this.#text
  }

  getUserPayload() {
    return { seenCustomizeLocationMessage: true }
  }

  meetRequirementsToSend(messages) {
    return hasMessageWithMatches(messages)
  }
}
