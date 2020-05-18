const { MESSAGE_TYPES } = require('./consts')

const extrasMap = {
  [MESSAGE_TYPES.customLocation]: undefined,
  [MESSAGE_TYPES.emptyFeaturedMatches]: {
    disable_notification: true,
    disable_web_page_preview: true,
    parse_mode: 'HTML',
  },
  [MESSAGE_TYPES.favoriteTeamsMatches]: {
    disable_web_page_preview: true,
    parse_mode: 'HTML',
  },
  [MESSAGE_TYPES.featuredMatches]: {
    disable_web_page_preview: true,
    parse_mode: 'HTML',
  },
}

class TelegramMessage {
  #message

  constructor(/* SmartMessage */ message) {
    this.#message = message
  }

  getExtra() {
    return extrasMap[this.#message.getType()]
  }

  getText() {
    return this.#message.getText()
  }

  getType() {
    return this.#message.getType()
  }

  getUserPayload() {
    return this.#message.getUserPayload()
  }

  meetRequirementsToSend(messages) {
    return this.#message.meetRequirementsToSend(messages)
  }
}

const makeTelegramMessage = (smartMessage) => new TelegramMessage(smartMessage)

exports.makeUsersTelegramMessages = (usersSmartMessages) =>
  usersSmartMessages.map(({ messages, ...rest }) => ({
    ...rest,
    messages: messages.map(makeTelegramMessage),
  }))
