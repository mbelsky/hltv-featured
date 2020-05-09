const { FEATURED_MATCHES_TYPES } = require('./consts')

const getFavoriteTeamsMatchesMessage = (raw) => {
  if (!raw) {
    return
  }

  return {
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

  return {
    text,
    extra: {
      disable_notification: type === FEATURED_MATCHES_TYPES.empty,
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
