const { error } = require('dotenv').config()

if (error) {
  throw error
}

const { Client } = require('@elastic/elasticsearch')
const alerter = require('./alerter')

const client = new Client({ node: process.env.ELASTICSEARCH_URL })

const log = async (index, data) => {
  try {
    await client.index({
      index,
      body: {
        env: process.env.NODE_ENV,
        timestamp: Date.now(),
        ...data,
      },
    })
  } catch (e) {
    alerter.error('Log to elastic failed', e)
  }
}

const logFabric = (index) => (data) => log(index, data)

module.exports = {
  logFabric,
}
