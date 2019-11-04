const axios = require('axios')
const cheerio = require('cheerio')

const s = {
  event: '.event .event-name',
  teamName: '.team-cell div.team',
  time: '.time div.time',
}

const root = process.env.ROOT_URL || 'https://www.hltv.org'
const url = process.env.PAGE_URL || 'https://www.hltv.org/matches'

function htmlToMatches(html) {
  const $ = cheerio.load(html)
  const matchContainers = $('a.upcoming-match')

  return Array.from(matchContainers).reduce((matches, container) => {
    container = $(container)
    const href = root + container.attr('href')
    const unixTimestamp = Number(container.find(s.time).data('unix'))
    const teams = container.find(s.teamName)
    const title = teams
      .map((_, el) => $(el).text())
      .get()
      .join(' vs ')
    const event = container.find(s.event).text()
    const stars = container.find('i.star').length

    return [...matches, { href, unixTimestamp, title, stars, event }]
  }, [])
}

function saveFeaturedMatches(matches) {
  console.log(JSON.stringify(matches, null, 2))
}

axios(url).then(
  ({ data }) => {
    const matches = htmlToMatches(data)

    saveFeaturedMatches(matches)
  },
  (e) => {
    console.log('Failed to load html')
    throw e
  },
)
