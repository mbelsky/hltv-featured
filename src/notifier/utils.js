const { convertToMessage } = require('common/formatMatches')
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
}
