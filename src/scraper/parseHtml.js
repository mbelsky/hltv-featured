const cheerio = require('cheerio')

const s = {
  event: '.event .event-name',
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
    const teams = container.find(s.teamName)
    const title = teams
      .map((_, el) => $(el).text())
      .get()
      .join(' vs ')
    const event = container.find(s.event).text()
    const stars = container.find(s.star).length

    return [...matches, { id, href, unixTimestamp, title, stars, event }]
  }, [])
}
