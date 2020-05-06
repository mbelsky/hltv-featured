const { updateUser } = require('common/manageUsers')

const INVALID_INPUT_MESSAGE =
  'Please check that your input is valid: `/setfavorites Astralis[, NatusVincere]`'

const setFavorites = async (ctx) => {
  const { text } = ctx.message
  const spaceIndex = text.indexOf(' ')

  if (-1 === spaceIndex) {
    return ctx.reply(INVALID_INPUT_MESSAGE)
  }

  const rawFavorites = text.substring(spaceIndex).trim().toLowerCase()
  const favorites = rawFavorites.split(',').map((s) => s.trim())

  if (0 === favorites.length) {
    return ctx.reply(INVALID_INPUT_MESSAGE)
  }

  await updateUser(ctx.chat.id, { favorites })
  await ctx.reply('Your favorites list has been updated')
}

const resetFavorites = async (ctx) => {
  await updateUser(ctx.chat.id, { favorites: null })
  await ctx.reply('Your favorites list is empty')
}

module.exports = {
  resetFavorites,
  setFavorites,
}
