const alerter = require('alerter')

const axios = require('axios')
const {
  removeOutdatedMatches,
  saveFeaturedMatches,
} = require('common/manageMatches')
const htmlToMatches = require('./parseHtml')

const root = process.env.ROOT_URL || 'https://www.hltv.org'
const url = process.env.PAGE_URL || 'https://www.hltv.org/matches'

function scrap() {
  return removeOutdatedMatches()
    .catch(alerter.error)
    .then(() => axios(url))
    .then(({ data }) => {
      const matches = htmlToMatches(data, { root })

      return saveFeaturedMatches(matches)
    })
}

if (require.main === module) {
  scrap()
} else {
  module.exports = scrap
}
