const { error } = require('dotenv').config()

if (error) {
  throw error
}

const alerter = require('@hltvf/monitoring/alerter')
const log = require('./logger')()

const Telegram = require('telegraf/telegram')
const { updateUser } = require('common/manageUsers')
const { fetchData } = require('./fetchData')
const { makeRawMessages } = require('./makeRawMessages')
const { makeTgMessages } = require('./makeTgMessages')
const { sendMessages } = require('./sendMessages')

async function notify() {
  log('Notifier has started')

  const data = await fetchData()

  if (!data) {
    return
  }

  const { timeZoneOffsetsMap } = data

  log(`There are ${Object.keys(timeZoneOffsetsMap)} time zone ids`)

  const rawMessages = makeRawMessages(data)
  const usersTgMessages = makeTgMessages(rawMessages)

  const telegram = new Telegram(process.env.BOT_TOKEN)

  await sendMessages({ alerter, telegram, updateUser, usersTgMessages })
}

if (require.main === module) {
  notify()
}
