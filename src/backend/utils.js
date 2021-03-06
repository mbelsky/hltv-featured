const { convertUnixTimestampToDateTime } = require('common/formatMatches')
const { getUpcomingMatches } = require('common/manageMatches')

const CACHED_MATCHES_COUNT = 3

const sortByStars = (lhs, rhs) => rhs.stars - lhs.stars
const sortByTime = (lhs, rhs) => lhs.unixTimestamp - rhs.unixTimestamp

const convertMatchesToDateTimed = (matches) =>
  matches.map(({ unixTimestamp, ...rest }) => ({
    ...rest,
    datetime: convertUnixTimestampToDateTime(unixTimestamp),
  }))

// Define as factory to incapsulate cachedMatches
const getCachedMatchesFactory = () => {
  let cachedMatches = []

  return async function getCachedMatches() {
    const now = Date.now()
    const upcomingMatchesCount = cachedMatches.filter(
      ({ unixTimestamp }) => now < unixTimestamp,
    ).length

    if (CACHED_MATCHES_COUNT === upcomingMatchesCount) {
      return cachedMatches
    }

    cachedMatches = []

    const upcomingMatches = await getUpcomingMatches()
    const highRatedUpcomingMatches = upcomingMatches
      .sort(sortByStars)
      .slice(0, CACHED_MATCHES_COUNT)
      .sort(sortByTime)

    cachedMatches.push(...highRatedUpcomingMatches)

    return cachedMatches
  }
}

module.exports = {
  convertMatchesToDateTimed,
  getCachedMatches: getCachedMatchesFactory(),
}
