const { MESSAGE_TYPES } = require('../consts')
const { hasMessageWithMatches } = require('./hasMessageWithMatches')

exports.EmptyFeaturedMatchesMessage = class EmptyFeaturedMatchesMessage {
  #text

  constructor({ text }) {
    this.#text = text
  }

  getType() {
    return MESSAGE_TYPES.emptyFeaturedMatches
  }

  getText() {
    return this.#text
  }

  getUserPayload() {
    return { seenEmptyMessage: true }
  }

  meetRequirementsToSend(messages) {
    return !hasMessageWithMatches(messages)
  }
}
