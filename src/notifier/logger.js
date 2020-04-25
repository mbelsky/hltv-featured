const log = require('@hltvf/monitoring/logger').logFabric(
  'requests-tg-notifier',
)

const devLog = (message) => {
  console.log(message)
}

const prodLog = (message) => {
  log({
    level: 'info',
    data: {
      message,
    },
  })
  console.log(message)
}

const loggersMap = {
  production: prodLog,
}

const getLogger = () => {
  const log = loggersMap[process.env.NODE_ENV]

  return log || devLog
}

module.exports = getLogger
