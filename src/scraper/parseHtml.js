const cheerio = require('cheerio')

const s = {
  container: 'div.upcomingMatch',
  event: '.matchEvent .matchEventName',
  eventPlaceholder: '.matchInfoEmpty span',
  teamName: '.matchTeam div.matchTeamName',
  teamNameWinner: '.matchTeam div.team',
  time: '.matchInfo div.matchTime',
  star: 'i.fa-star.faded',
  upcomingMatch: 'a.match',
}

module.exports = function htmlToMatches(html, { root }) {
  const $ = cheerio.load(html)
  const matchContainers = $(s.container)

  return Array.from(matchContainers).reduce((matches, container) => {
    container = $(container)

    const href = root + container.find(s.upcomingMatch).attr('href')
    const id = Number(href.match(/matches\/(\d+)\//)[1])

    if (isNaN(id)) {
      throw new Error(`Match should have an id. id=${id}, tag=\n${container}`)
    }

    const unixTimestamp = Number(container.find(s.time).data('unix'))
    const stars = 5 - container.find(s.star).length
    const teams = container
      .find(s.teamName)
      .toArray()
      .concat(container.find(s.teamNameWinner).toArray())
    let title = 'TBD vs TBD'
    let event

    if (teams.length) {
      title = teams.map((el) => $(el).text()).join(' vs ')
      event = container.find(s.event).text()
    } else {
      event = container.find(s.eventPlaceholder).text()
    }

    event = event.replace(/\s+/g, ' ').trim()

    return [...matches, { id, href, unixTimestamp, title, stars, event }]
  }, [])
}
