const axios = require('axios')
const {
  removeOutdatedMatches,
  saveFeaturedMatches,
} = require('./manageMatches')
const htmlToMatches = require('./parseHtml')

const root = process.env.ROOT_URL || 'https://www.hltv.org'
const url = process.env.PAGE_URL || 'https://www.hltv.org/matches'

function scrap() {
  return removeOutdatedMatches()
    .catch((e) => console.log('removeOutdatedMatches has failed: ' + e))
    .then(() => axios(url))
    .then(
      ({ data }) => {
        const matches = htmlToMatches(data, { root })

        return saveFeaturedMatches(matches)
      },
      (e) => {
        console.log('Failed to load html')
        throw e
      },
    )
}

if (require.main === module) {
  scrap()
} else {
  module.exports = scrap
}
