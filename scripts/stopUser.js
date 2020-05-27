const { FILTER_STOP_VALUE } = require('common/consts')
const { setFilter } = require('common/manageUsers')

const stopUser = (chatId) =>
  setFilter({ chatId, filter: FILTER_STOP_VALUE }).catch((e) =>
    console.log('Failed to stop ' + chatId, e),
  )

process.env.CHAT_IDS.split(',')
  .map((id) => id.trim())
  .filter(Boolean)
  .forEach(stopUser)
