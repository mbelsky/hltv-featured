const alerter = require('@hltvf/monitoring/alerter')
const log = require('@hltvf/monitoring/logger').logFabric('requests-scraper')

const axios = require('axios')
const { getTeams } = require('common/getTeams')
const {
  removeOutdatedMatches,
  saveFeaturedMatches,
} = require('common/manageMatches')
const { addTeams } = require('common/manageTeams')
const htmlToMatches = require('./parseHtml')

const root = process.env.ROOT_URL || 'https://www.hltv.org'
const url = process.env.PAGE_URL || 'https://www.hltv.org/matches'

const logResult = (data, matches) => {
  if (!matches.length) {
    alerter.warn('Zero matches scraped. HTML:\n\n' + data)
  }

  const message = `Scraped & saved ${matches.length} matches`
  console.log(message)

  if ('production' === process.env.NODE_ENV) {
    log({
      level: 'info',
      data: {
        message,
      },
    })
  }
}

function scrap() {
  log({
    level: 'info',
    data: {
      message: 'Scraper has started',
    },
  })

  return removeOutdatedMatches()
    .catch(alerter.error)
    .then(() => axios(url))
    .then(({ data }) => {
      const matches = htmlToMatches(data, { root })
      const teams = getTeams(matches)

      const addTeamsPromise = addTeams(teams).catch(alerter.error)
      const saveMatchesPromise = saveFeaturedMatches(matches)
        .then(() => logResult(data, matches))
        .catch(alerter.error)

      return Promise.all([addTeamsPromise, saveMatchesPromise])
    })
}

if (require.main === module) {
  scrap()
} else {
  module.exports = scrap
}
