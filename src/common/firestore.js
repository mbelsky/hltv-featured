const admin = require('firebase-admin')

admin.initializeApp({
  credential: admin.credential.cert(process.env.FIREBASE_CONFIG),
})

const db = admin.firestore()

module.exports = db
