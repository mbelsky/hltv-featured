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

module.exports = {
  formatUTCString,
  convertToMessage,
}
