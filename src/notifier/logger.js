const log = require('@hltvf/monitoring/logger').logFabric(
  'requests-tg-notifier',
)

const devLog = (message) => {
  console.log(new Date().toUTCString(), message)
}

const prodLog = (message) => {
  log({
    level: 'info',
    data: {
      message,
    },
  })

  devLog(message)
}

const loggersMap = {
  production: prodLog,
}

const getLogger = () => {
  const log = loggersMap[process.env.NODE_ENV]

  return log || devLog
}

module.exports = getLogger
