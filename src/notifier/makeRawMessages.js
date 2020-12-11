const {
  DEFAULT_TIMEZONE_OFFSET,
  convertMatchesToFeed,
  convertUnixTimestampToDateTime,
} = require('common/formatMatches')
const { getMatchTeams } = require('common/getTeams')
const { FEATURED_MATCHES_TYPES } = require('./consts')
const { splitMatchesByFilter } = require('./utils')

const CUSTOM_LOCATION_MESSAGE =
  'You may change matches timezone for your feed. Just tap on the 📎 attachment button, choose Location and send your city coordinates as a message.'

const getCustomLocationMessage = (location, seenCustomizeLocationMessage) =>
  seenCustomizeLocationMessage || undefined !== location.timeZoneId
    ? undefined
    : CUSTOM_LOCATION_MESSAGE

const getNoFeaturedMatchesMessage = (filter) =>
  `
There are no ${filter}-stars matches today. And I won't spam you with this message every morning.

Next time just send /upcoming if no morning notification.`.trim()

const mapRawFeed = (timeZoneOffset, { unixTimestamp, ...rest }) => {
  const datetime = convertUnixTimestampToDateTime(
    unixTimestamp,
    timeZoneOffset * 1000,
  )

  return {
    ...rest,
    datetime,
  }
}

const getFavoriteTeamsMatchesMessage = (
  favorites,
  todayMatches = [],
  timeZoneOffset,
) => {
  if (!Array.isArray(favorites) || 0 === favorites.length) {
    return
  }

  // TODO: Replace favorites with Map/Set

  const matches = todayMatches
    .filter((match) => {
      // TODO: pass alerter
      const teams = getMatchTeams({ match })
      const isFavoriteTeamMatch =
        0 !== teams.filter((team) => favorites.includes(team)).length

      return isFavoriteTeamMatch
    })
    .map((match) => mapRawFeed(timeZoneOffset, match))

  if (0 === matches.length) {
    return
  }

  return (
    '<b>Your favorite teams matches:</b>\n\n' + convertMatchesToFeed(matches)
  )
}

const getFeaturedMatches = ({ matches, filter, seenEmptyMessage }) => {
  let featuredMatchesMessage = convertMatchesToFeed(matches)
  const hasFeaturedMatches = !!featuredMatchesMessage
  const featuredMatchesType = hasFeaturedMatches
    ? FEATURED_MATCHES_TYPES.success
    : FEATURED_MATCHES_TYPES.empty

  if (!hasFeaturedMatches) {
    if (seenEmptyMessage) {
      return
    }

    featuredMatchesMessage = getNoFeaturedMatchesMessage(filter)
  }

  return {
    message: featuredMatchesMessage,
    type: featuredMatchesType,
  }
}

exports.makeRawMessages = ({ matches, timeZoneOffsetsMap, users }) => {
  const rawFeedList = splitMatchesByFilter(matches)

  return Object.entries(users).map(
    ([
      id,
      {
        favorites,
        filter,
        location = {},
        seenEmptyMessage,
        seenCustomizeLocationMessage,
      },
    ]) => {
      const timeZoneOffset =
        timeZoneOffsetsMap[location.timeZoneId] || DEFAULT_TIMEZONE_OFFSET
      const userMatches = (rawFeedList[filter] || []).map((match) =>
        mapRawFeed(timeZoneOffset, match),
      )
      const featuredMatches = getFeaturedMatches({
        matches: userMatches,
        filter,
        seenEmptyMessage,
      })
      const favoriteTeamsMatches = getFavoriteTeamsMatchesMessage(
        favorites,
        rawFeedList[0],
        timeZoneOffset,
      )
      const customLocationMessage = getCustomLocationMessage(
        location,
        seenCustomizeLocationMessage,
      )

      return {
        id,
        featuredMatches,
        favoriteTeamsMatches,
        customLocationMessage,
      }
    },
  )
}
