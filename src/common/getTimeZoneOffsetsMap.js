const alerter = require('alerter')
const { getTimezone } = require('./getTimezone')

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

    if (Object.keys(result).length !== getTimeZonePromises.length) {
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

module.exports = {
  getTimeZoneOffsetsMap,
}
