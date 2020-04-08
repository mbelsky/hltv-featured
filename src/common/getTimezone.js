const { Client } = require('@googlemaps/google-maps-services-js')

if ('undefined' === typeof process.env.GOOGLE_MAPS_API_KEY) {
  throw new Error('GOOGLE_MAPS_API_KEY var should be defined')
}

const client = new Client()

const getTimezone = async ({ latitude, longitude, timestamp }) => {
  const { data } = await client.timezone({
    params: {
      key: process.env.GOOGLE_MAPS_API_KEY,
      location: [latitude, longitude],
      timestamp: timestamp,
    },
  })

  return data
}

module.exports = {
  getTimezone,
}
