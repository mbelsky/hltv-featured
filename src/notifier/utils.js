const NBSP = '\u00A0'
function formatUTCString(utcString) {
  const { day, month, hours, minutes } = utcString.match(
    /\w+, (?<day>\d{2}) (?<month>\w+) \d{4} (?<hours>\d{2}):(?<minutes>\d{2})/,
  ).groups

  return `${day} ${month} ${hours}:${minutes} UTC`
}

function convertToMessage({ event, href, stars, title, unixTimestamp }) {
  const when = new Date(unixTimestamp).toUTCString()
  const date = formatUTCString(when).replace(/\s/g, NBSP)

  return `
[${title.replace(/\s/g, NBSP)}](${href})
Rating: ${'☆'.repeat(stars) || '–'}
_${date} @ ${event}_
`.trim()
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
  formatUTCString,
  getMatchesFeed,
}
