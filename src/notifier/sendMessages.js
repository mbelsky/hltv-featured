const { MESSAGE_TYPES } = require('./consts')

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
        const hasMessageWithMatches = messages.some(({ type }) =>
          [
            MESSAGE_TYPES.featuredMatches,
            MESSAGE_TYPES.favoriteTeamsMatches,
          ].includes(type),
        )

        if (
          MESSAGE_TYPES.emptyFeaturedMatches === message.type &&
          hasMessageWithMatches
        ) {
          continue
        }

        if (
          MESSAGE_TYPES.customLocation === message.type &&
          !hasMessageWithMatches
        ) {
          continue
        }

        await telegram.sendMessage(id, message.text, message.extra)

        const data = {}

        switch (message.type) {
          case MESSAGE_TYPES.customLocation:
            data.seenCustomizeLocationMessage = true
            break
          case MESSAGE_TYPES.emptyFeaturedMatches:
            data.seenEmptyMessage = true
            break
          default:
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
