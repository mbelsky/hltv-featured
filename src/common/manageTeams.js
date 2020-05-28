const { TEAMS_COLLECTION } = require('./consts')
const db = require('./firestore')

const addTeams = async (teams = []) => {
  if (!teams.length) {
    return
  }

  const batch = db.batch()

  teams
    .map((team) => team.trim().toLowerCase())
    .filter(Boolean)
    .forEach((team) => {
      const teamRef = db.collection(TEAMS_COLLECTION).doc(team)
      batch.set(teamRef, {})
    })

  await batch.commit()
}

const getTeams = async () => {
  const querySnapshot = await db.collection(TEAMS_COLLECTION).get()

  return querySnapshot.docs.map(({ id }) => id)
}

module.exports = {
  addTeams,
  getTeams,
}
