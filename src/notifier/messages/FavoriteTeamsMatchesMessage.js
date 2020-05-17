const { MESSAGE_TYPES } = require('../consts')

exports.FavoriteTeamsMatchesMessage = class FavoriteTeamsMatchesMessage {
  #text

  constructor({ text }) {
    this.#text = text
  }

  getType() {
    return MESSAGE_TYPES.favoriteTeamsMatches
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
