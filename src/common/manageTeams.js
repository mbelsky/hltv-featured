const { TEAMS_COLLECTION } = require('./consts')
const db = require('./firestore')

/**
 * team uses as a doc id, so it can't contain '/' symbol
 */
const encodeTeam = (team) => encodeURIComponent(team.trim().toLowerCase())

const addTeams = async (teams = []) => {
  if (!teams.length) {
    return
  }

  const batch = db.batch()

  teams
    .map(encodeTeam)
    .filter(Boolean)
    .forEach((team) => {
      const teamRef = db.collection(TEAMS_COLLECTION).doc(team)
      batch.set(teamRef, {})
    })

  await batch.commit()
}

const getTeams = async () => {
  const querySnapshot = await db.collection(TEAMS_COLLECTION).get()

  return querySnapshot.docs.map(({ id }) => decodeURIComponent(id))
}

module.exports = {
  addTeams,
  getTeams,
}
