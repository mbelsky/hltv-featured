const { makeRawMessages } = require('./makeRawMessages')
const { makeUsersSmartMessages } = require('./makeUsersSmartMessages')
const { makeUsersTelegramMessages } = require('./makeUsersTelegramMessages')
const { sendMessages } = require('./sendMessages')

async function _notify({ alerter, fetchData, log, telegram, updateUser }) {
  log('Notifier has started')

  const data = await fetchData()

  if (!data) {
    return
  }

  const { timeZoneOffsetsMap } = data

  log(`There are ${Object.keys(timeZoneOffsetsMap)} time zone ids`)

  const rawMessages = makeRawMessages(data)
  const usersSmartMessages = makeUsersSmartMessages(rawMessages)
  const usersTelegramMessages = makeUsersTelegramMessages(usersSmartMessages)

  await sendMessages({
    alerter,
    log,
    telegram,
    updateUser,
    usersTgMessages: usersTelegramMessages,
  })
}

async function notify() {
  const { error } = require('dotenv').config()

  if (error) {
    throw error
  }

  const alerter = require('@hltvf/monitoring/alerter')
  const log = require('./logger')()

  const Telegram = require('telegraf/telegram')
  const { updateUser } = require('common/manageUsers')
  const { fetchData } = require('./fetchData')

  const telegram = new Telegram(process.env.BOT_TOKEN)

  try {
    await _notify({
      alerter,
      fetchData,
      log,
      telegram,
      updateUser,
    })
  } catch (e) {
    alerter.error(e)
  }
}

module.exports = {
  _notify,
}

/* istanbul ignore next */
if (require.main === module) {
  notify()
}
