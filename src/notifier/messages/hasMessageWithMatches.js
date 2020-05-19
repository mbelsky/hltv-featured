const { MESSAGE_TYPES } = require('../consts')

exports.hasMessageWithMatches = (messages) =>
  messages.some((message) =>
    [
      MESSAGE_TYPES.featuredMatches,
      MESSAGE_TYPES.favoriteTeamsMatches,
    ].includes(message.getType()),
  )
