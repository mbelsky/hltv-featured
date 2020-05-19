const { FEATURED_MATCHES_TYPES } = require('./consts')

const {
  CustomLocationMessage,
  EmptyFeaturedMatchesMessage,
  FavoriteTeamsMatchesMessage,
  FeaturedMatchesMessage,
} = require('./messages')

const getFavoriteTeamsMatchesMessage = (raw) => {
  if (!raw) {
    return
  }

  return new FavoriteTeamsMatchesMessage({ text: raw })
}

const getFeaturedMatchesMessage = (raw) => {
  if (!raw) {
    return
  }

  const { message: text, type } = raw
  const Constructor =
    type === FEATURED_MATCHES_TYPES.empty
      ? EmptyFeaturedMatchesMessage
      : FeaturedMatchesMessage

  return new Constructor({ text })
}

const getCustomLocationMessage = (raw) => {
  if (!raw) {
    return
  }

  return new CustomLocationMessage({ text: raw })
}

exports.makeUsersSmartMessages = (rawMessages) => {
  return rawMessages
    .map(
      ({
        id,
        featuredMatches,
        favoriteTeamsMatches,
        customLocationMessage,
      }) => {
        const messages = [
          getFeaturedMatchesMessage(featuredMatches),
          getFavoriteTeamsMatchesMessage(favoriteTeamsMatches),
          getCustomLocationMessage(customLocationMessage),
        ].reduce((result, message) => {
          if (message) {
            result.push(message)
          }

          return result
        }, [])

        if (0 === messages.length) {
          return undefined
        }

        return {
          id: Number(id),
          messages,
        }
      },
    )
    .filter(Boolean)
}
