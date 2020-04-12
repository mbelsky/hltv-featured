const escapeHtml = require('escape-html')
const NBSP = '\u00A0'

function formatUTCString(utcString) {
  const { day, month, hours, minutes } = utcString.match(
    /\w+, (?<day>\d{2}) (?<month>\w+) \d{4} (?<hours>\d{2}):(?<minutes>\d{2})/,
  ).groups

  return `${day} ${month} ${hours}:${minutes}`
}

function convertMatchesToFeed(matches) {
  return matches.map(convertToMessage).join('\n\n')
}

function convertToMessage({ event, href, stars, title, datetime }) {
  return `
<a href="${href}">${escapeHtml(title).replace(/\s/g, NBSP)}</a>
Rating: ${'☆'.repeat(stars) || '–'}
<i>${datetime} @ ${escapeHtml(event)}</i>
`.trim()
}

const DEFAULT_TIMEZONE_OFFSET = 0

function convertUnixTimestampToDateTime(
  unixTimestampMillis,
  timeZoneOffsetMillis = DEFAULT_TIMEZONE_OFFSET,
) {
  const when = new Date(
    unixTimestampMillis + timeZoneOffsetMillis,
  ).toUTCString()
  const suffix = DEFAULT_TIMEZONE_OFFSET === timeZoneOffsetMillis ? ' UTC' : ''

  return (formatUTCString(when) + suffix).replace(/\s/g, NBSP)
}

module.exports = {
  DEFAULT_TIMEZONE_OFFSET,
  NBSP,
  convertMatchesToFeed,
  convertUnixTimestampToDateTime,
}
