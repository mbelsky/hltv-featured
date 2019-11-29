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

async function initUser({ chatId }) {
  const userRef = db.collection(USERS_COLLECTION).doc(String(chatId))

  await db.runTransaction(async function initUserTransaction(t) {
    const doc = await t.get(userRef)

    if (!doc.data()) {
      await t.set(userRef, { filter: 2 })
    }
  })
}

// TODO: Replace with updateUser
async function setFilter({ chatId, filter }) {
  const userRef = db.collection(USERS_COLLECTION).doc(String(chatId))
  await userRef.set({ filter }, { merge: true })
}

async function updateUser(chatId, props) {
  const userRef = db.collection(USERS_COLLECTION).doc(String(chatId))
  await userRef.set(props, { merge: true })
}

module.exports = {
  getActiveUsers,
  initUser,
  setFilter,
  updateUser,
}
