const { USERS_COLLECTION } = require('./consts')
const db = require('./firestore')

async function setFilter({ chatId, filter }) {
  const userRef = db.collection(USERS_COLLECTION).doc(String(chatId))
  await userRef.set({ filter }, { merge: true })
}

module.exports = {
  setFilter,
}
