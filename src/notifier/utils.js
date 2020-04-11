const alerter = require('alerter')
const { convertToMessage } = require('common/formatMatches')
const { getTimezone } = require('common/getTimezone')

async function getTimeZoneOffsetsMap(users) {
  const timestamp = Date.now() / 1000
  const userTimeZonesMap = Object.values(users)
    .filter(({ location = {} }) => !!location.timeZoneId)
    .reduce((map, { location }) => {
      map[location.timeZoneId] = location

      return map
    }, {})
  const getTimeZonePromises = Object.values(
    userTimeZonesMap,
  ).map(({ latitude, longitude }) =>
    getTimezone({ latitude, longitude, timestamp }),
  )

  try {
    // TODO: replace with allSettled
    const timeZoneResponses = await Promise.all(getTimeZonePromises)
    const result = timeZoneResponses
      .filter(({ timeZoneId }) => !!timeZoneId)
      .reduce((map, { dstOffset, rawOffset, timeZoneId }) => {
        map[timeZoneId] = dstOffset + rawOffset

        return map
      }, {})

    if (Object.keys(result).length !== getTimeZonePromises) {
      alerter.warn(
        new Error(
          'There are invalid getTimeZone responses:\n' +
            JSON.stringify(timeZoneResponses, null, 2),
        ),
      )
    }

    return result
  } catch (e) {
    alerter.error(e)
    return {}
  }
}

function splitMatchesByFilter(matches = []) {
  const result = []

  let i = 0

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const filteredMatches = matches.filter(({ stars }) => stars >= i)

    if (0 === filteredMatches.length) {
      break
    }

    result[i] = filteredMatches
    i++
  }

  return result
}

function getMatchesFeed(matches) {
  const feed = [[], [], [], [], [], []]
  const feedCount = feed.length

  matches.forEach((match) => {
    const { stars } = match
    const message = convertToMessage(match)

    if (stars > feedCount) {
      throw new Error('WTF? ' + JSON.stringify(match, null, 2))
    }

    for (let i = 0; i <= stars; i++) {
      feed[i].push(message)
    }
  })

  return feed.map((matches) => matches.join('\n\n'))
}

module.exports = {
  getTimeZoneOffsetsMap,
  splitMatchesByFilter,
}
