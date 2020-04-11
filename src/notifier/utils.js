const { convertToMessage } = require('common/formatMatches')

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
  getMatchesFeed,
  splitMatchesByFilter,
}
