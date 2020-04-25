const log = require('@hltvf/monitoring/logger').logFabric('requests-tg-bot')

const loggerFabric = () => (ctx, next) => {
  const data = {
    level: 'info',
    type: 'update',
    data: ctx.update,
  }

  log(data)

  return next()
}

module.exports = loggerFabric
