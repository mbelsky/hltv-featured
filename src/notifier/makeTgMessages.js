const { FEATURED_MATCHES_TYPES, MESSAGE_TYPES } = require('./consts')

const getFavoriteTeamsMatchesMessage = (raw) => {
  if (!raw) {
    return
  }

  return {
    type: MESSAGE_TYPES.favoriteTeamsMatches,
    text: raw,
    extra: {
      disable_web_page_preview: true,
      parse_mode: 'HTML',
    },
  }
}

const getFeaturedMatchesMessage = (raw) => {
  if (!raw) {
    return
  }

  const { message: text, type } = raw
  const isEmpty = type === FEATURED_MATCHES_TYPES.empty

  return {
    type: isEmpty
      ? MESSAGE_TYPES.emptyFeaturedMatches
      : MESSAGE_TYPES.featuredMatches,
    text,
    extra: {
      disable_notification: isEmpty,
      disable_web_page_preview: true,
      parse_mode: 'HTML',
    },
  }
}

const getCustomLocationMessage = (raw) => {
  if (!raw) {
    return
  }

  return {
    type: MESSAGE_TYPES.customLocation,
    text: raw,
  }
}

exports.makeTgMessages = (rawMessages) => {
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
