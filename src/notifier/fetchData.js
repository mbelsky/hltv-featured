const alerter = require('@hltvf/monitoring/alerter')
const { getTimeZoneOffsetsMap } = require('common/getTimeZoneOffsetsMap')
const { getUpcomingMatches } = require('common/manageMatches')
const { getActiveUsers } = require('common/manageUsers')

exports.fetchData = async () => {
  const users = await getActiveUsers()

  if (!Object.keys(users).length) {
    alerter.warn('There is no active users')
    return
  }

  const matches = await getUpcomingMatches()

  if (!matches.length) {
    alerter.warn('There is no upcoming matches')
    return
  }

  const timeZoneOffsetsMap = await getTimeZoneOffsetsMap(users)

  return {
    matches,
    timeZoneOffsetsMap,
    users,
  }
}
