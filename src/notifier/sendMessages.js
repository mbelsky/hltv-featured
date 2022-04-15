const { splitLongTelegramMessage } = require('./splitLongTelegramMessage')

exports.sendMessages = async ({
  alerter,
  log,
  telegram,
  updateUser,
  usersTgMessages,
}) => {
  const forbiddenIds = []
  const sendTelegramMessagesFn =
    process.env.NODE_ENV === 'production'
      ? sendTelegramMessages
      : sendTelegramMessagesDevelopmentEnviroment

  for await (const userTgMessages of usersTgMessages) {
    const { id, messages } = userTgMessages

    try {
      for await (const message of messages) {
        if (!message.meetRequirementsToSend(messages)) {
          continue
        }

        await sendTelegramMessagesFn({ message, userId: id })

        const data = message.getUserPayload()

        if (!data) {
          continue
        }

        try {
          await updateUser(String(id), data)
        } catch (e) {
          alerter.error(e)
        }
      }
    } catch (e) {
      // 403: Forbidden: bot was blocked by the user
      if (403 === e.code) {
        forbiddenIds.push(id)
      } else {
        alerter.error('chatid: ' + id, e)
      }
    }
  }

  log(
    `Total users count: ${usersTgMessages.length}. forbiddenIds count: ${forbiddenIds.length}`,
  )

  async function sendTelegramMessages({ message, userId }) {
    const extra = message.getExtra()
    const texts = splitLongTelegramMessage(message)

    for (const text of texts) {
      await telegram.sendMessage(userId, text, extra)
    }
  }

  async function sendTelegramMessagesDevelopmentEnviroment(data) {
    const testAccountsRaw = process.env.TELEGRAM_USER_TEST_IDS || ''
    const allowlist = testAccountsRaw
      .split(',')
      .filter(Boolean)
      .map((id) => Number.parseInt(id, 10))

    if (!allowlist.includes(data.userId)) {
      return
    }

    return sendTelegramMessages(data)
  }
}
