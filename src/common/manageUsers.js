const { USERS_COLLECTION } = require('./consts')
const db = require('./firestore')

async function getActiveUsers() {
  const collectionSnapshot = await db
    .collection(USERS_COLLECTION)
    .where('filter', '<', Number.MAX_SAFE_INTEGER)
    .get()

  return collectionSnapshot.docs.reduce((users, documentSnapshot) => {
    const data = documentSnapshot.data()

    return data ? { ...users, [documentSnapshot.id]: data } : users
  }, {})
}

async function setFilter({ chatId, filter }) {
  const userRef = db.collection(USERS_COLLECTION).doc(String(chatId))
  await userRef.set({ filter }, { merge: true })
}

module.exports = {
  getActiveUsers,
  setFilter,
}
