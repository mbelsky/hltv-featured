function splitMatchesByFilter(matches = []) {
  const result = []

  let i = 0

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const filteredMatches = matches.filter(({ stars }) => stars >= i)

    if (0 === filteredMatches.length) {
      break
    }

    result[i] = filteredMatches
    i++
  }

  return result
}

module.exports = {
  splitMatchesByFilter,
}
