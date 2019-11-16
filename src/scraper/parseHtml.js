const cheerio = require('cheerio')

const s = {
  event: '.event .event-name',
  eventPlaceholder: 'td.placeholder-text-cell',
  teamName: '.team-cell div.team',
  time: '.time div.time',
  star: 'i.star',
  upcomingMatch: 'a.upcoming-match',
}

module.exports = function htmlToMatches(html, { root }) {
  const $ = cheerio.load(html)
  const matchContainers = $(s.upcomingMatch)

  return Array.from(matchContainers).reduce((matches, container) => {
    container = $(container)
    const href = root + container.attr('href')
    const id = Number(href.match(/matches\/(\d+)\//)[1])

    if (isNaN(id)) {
      throw new Error(`Match should have an id. id=${id}, tag=\n${container}`)
    }

    const unixTimestamp = Number(container.find(s.time).data('unix'))
    const stars = container.find(s.star).length
    const teams = container.find(s.teamName)
    let title = 'TBD vs TBD'
    let event

    if (teams.length) {
      title = teams
        .map((_, el) => $(el).text())
        .get()
        .join(' vs ')
      event = container.find(s.event).text()
    } else {
      event = container.find(s.eventPlaceholder).text()
    }

    event = event.replace(/\s+/g, ' ').trim()

    return [...matches, { id, href, unixTimestamp, title, stars, event }]
  }, [])
}
