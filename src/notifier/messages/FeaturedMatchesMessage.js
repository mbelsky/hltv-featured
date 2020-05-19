const { MESSAGE_TYPES } = require('../consts')

exports.FeaturedMatchesMessage = class FeaturedMatchesMessage {
  #text

  constructor({ text }) {
    this.#text = text
  }

  getType() {
    return MESSAGE_TYPES.featuredMatches
  }

  getText() {
    return this.#text
  }

  getUserPayload() {
    return
  }

  meetRequirementsToSend() {
    return true
  }
}
