const getMatchTeams = (match) => {
  const { title } = match
  const teams = title.toLowerCase().split(' vs ')

  if (2 !== teams.length) {
    throw new Error(`Failed to get teams from '${title}'; teams=${teams}`)
  }

  return teams
}

const getTeams = (matches) => {
  const teams = matches.map(getMatchTeams).flat(Infinity)

  return [...new Set(teams)]
}

module.exports = {
  getMatchTeams,
  getTeams,
}
