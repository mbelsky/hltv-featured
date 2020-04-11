const { error } = require('dotenv').config()

if (error) {
  throw error
}

const alerter = require('alerter')

const Telegraf = require('telegraf/telegraf')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')

const rateLimit = require('telegraf-ratelimit')

const {
  scene: setFilterScene,
  name: setFilterSceneName,
} = require('./scenes/setFilter')

const commands = require('./commands')

const stage = new Stage()

stage.register(setFilterScene)

const bot = new Telegraf(process.env.BOT_TOKEN)
const rateLimitConfig = {
  limit: parseInt(process.env.USER_REQUESTS_RATE_LIMIT || 1, 10),
  window: 1000,
  onLimitExceeded: (ctx) => ctx.reply('Please try again later'),
}

bot
  .catch(async (err, ctx) => {
    alerter.error(err)

    try {
      await ctx.reply(
        '🙈 Oops, something went wrong. We will try to fix that as soon as we can.',
      )
    } catch (e) {
      alerter.error(e)
    }
  })
  .use((ctx, next) => {
    const { chat = {} } = ctx

    if ('private' !== chat.type) {
      return ctx.reply('Sorry, but groups and channels not supported yet')
    }
    if (ctx.editedMessage) {
      return ctx.reply('Please send a new message instead of editing an older')
    }

    return next()
  })
  .use(rateLimit(rateLimitConfig))
  .use(session())
  .use(stage.middleware())
  // TODO: set limiter
  .on('location', commands.location)
  .start(commands.start)
  .help(commands.help)
  .command(setFilterSceneName, (ctx) => ctx.scene.enter(setFilterSceneName))
  .command('upcoming', commands.upcoming)
  .command('stop', commands.stop)
  .use(async (ctx, next) => {
    await (next && next())
    ctx.reply(
      `Sorry, I don't know how to handle this. Please use a command described in /help`,
    )
  })

const handleShutdown = async (signal) => {
  console.log('Received signal:', signal)

  await bot
    .stop(() => process.exit(0))
    .catch((e) => {
      alerter.error(e)
      process.exit(1)
    })
}

bot.launch().then(() => {
  console.log('Bot has been launched')
  ;['SIGTERM', 'SIGINT'].forEach((s) => process.on(s, handleShutdown))
})
