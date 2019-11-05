const { MATCHES_COLLECTION } = require('./consts')
const db = require('./firestore')

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
  removeOutdatedMatches,
  saveFeaturedMatches,
}
