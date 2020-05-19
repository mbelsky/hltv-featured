exports.sendMessages = async ({
  alerter,
  telegram,
  updateUser,
  usersTgMessages,
}) => {
  const forbiddenIds = []

  for await (const userTgMessages of usersTgMessages) {
    const { id, messages } = userTgMessages

    try {
      for await (const message of messages) {
        if (!message.meetRequirementsToSend(messages)) {
          continue
        }

        await telegram.sendMessage(id, message.getText(), message.getExtra())

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

  if (0 < forbiddenIds.length) {
    alerter.warn('forbiddenIds: ' + forbiddenIds.join(', '))
  }
}
