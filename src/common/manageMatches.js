const { MATCHES_COLLECTION } = require('./consts')
const db = require('./firestore')

const ONE_DAY_MILLIS = 24 * 60 * 60 * 1000

async function getUpcomingMatches() {
  const now = Date.now()
  const nextDay = now + ONE_DAY_MILLIS
  const query = db
    .collection(MATCHES_COLLECTION)
    .where('unixTimestamp', '<=', nextDay)
    .where('unixTimestamp', '>=', now)
    .orderBy('unixTimestamp')

  const querySnapshot = await query.get()

  return querySnapshot.docs
    .map((documentSnapshot) => documentSnapshot.data())
    .filter(Boolean)
}

async function removeOutdatedMatches() {
  const query = db
    .collection(MATCHES_COLLECTION)
    .where('unixTimestamp', '<', Date.now())

  const batch = db.batch()
  const outdatedMatches = await query.get()

  outdatedMatches.docs.forEach(({ ref }) => batch.delete(ref))

  await batch.commit()
}

async function saveFeaturedMatches(matches) {
  const batch = db.batch()

  matches.forEach((match) => {
    const matchRef = db.collection(MATCHES_COLLECTION).doc(String(match.id))
    batch.set(matchRef, match)
  })

  await batch.commit()

  console.log(JSON.stringify(matches, null, 2))
}

module.exports = {
  getUpcomingMatches,
  removeOutdatedMatches,
  saveFeaturedMatches,
}
