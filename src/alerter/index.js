const { error } = require('dotenv').config()

if (error) {
  throw error
}

const Rollbar = require('rollbar')

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

module.exports = {
  error(err) {
    rollbar.error(err)
  },
  warn(text) {
    rollbar.warn(text)
  },
}
