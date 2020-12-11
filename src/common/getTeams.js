function getMatchTeams({ alerter, match }) {
  const { title } = match
  const teams = title.toLowerCase().split(' vs ')

  if (2 !== teams.length) {
    alerter?.warn(
      `Failed to get teams from '${title}'; teams=${teams}; match=${JSON.stringify(
        match,
        null,
        2,
      )}`,
    )
  }

  if (1 === teams.length) {
    return []
  }

  return teams
}

function getTeams({ alerter, matches }) {
  const teams = matches
    .map((match) => getMatchTeams({ alerter, match }))
    .flat(Infinity)

  return [...new Set(teams)]
}

module.exports = {
  getMatchTeams,
  getTeams,
}
