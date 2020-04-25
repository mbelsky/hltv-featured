const alerter = require('@hltvf/monitoring/alerter')
const log = require('@hltvf/monitoring/logger').logFabric('requests-scraper')

const axios = require('axios')
const {
  removeOutdatedMatches,
  saveFeaturedMatches,
} = require('common/manageMatches')
const htmlToMatches = require('./parseHtml')

const root = process.env.ROOT_URL || 'https://www.hltv.org'
const url = process.env.PAGE_URL || 'https://www.hltv.org/matches'

const logResult = (matches) => {
  if ('production' === process.env.NODE_ENV) {
    const message = `Scraped & saved ${matches.length} matches`

    console.log(message)
    log({
      level: 'info',
      data: {
        message,
      },
    })
  } else {
    console.log(JSON.stringify(matches, null, 2))
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

      return saveFeaturedMatches(matches).then(() => {
        if (!matches.length) {
          alerter.warn('Zero matches scraped. HTML:\n\n' + data)
        }

        logResult(matches)
      })
    })
}

if (require.main === module) {
  scrap()
} else {
  module.exports = scrap
}
