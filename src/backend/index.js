const { error } = require('dotenv').config()

if (error) {
  throw error
}

const Telegraf = require('telegraf')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')
const { scene: startScene, name: startSceneName } = require('./scenes/start')
const {
  scene: setFilterScene,
  name: setFilterSceneName,
} = require('./scenes/setFilter')

const commands = require('./commands')

const stage = new Stage()

stage.register(startScene)
stage.register(setFilterScene)

const bot = new Telegraf(process.env.BOT_TOKEN)

bot
  .use((ctx, next) => {
    console.log(ctx)
    // TODO: Check isn't a group usage
    return next()
  })
  .use(session())
  .use(stage.middleware())
  .use((ctx, next) => {
    console.log(ctx)
    return next()
  })
  .start((ctx) => ctx.scene.enter(startSceneName))
  .help(commands.help)
  .command(setFilterSceneName, (ctx) => ctx.scene.enter(setFilterSceneName))
  .command('stop', commands.stop)
  .use(async (ctx, next) => {
    await (next && next())
    ctx.reply(
      `Sorry, I don't know how to handle this. Please use something from /help`,
    )
  })

bot.launch().then(() => console.log('Bot has been launched'))
