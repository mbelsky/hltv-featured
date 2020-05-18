const { splitMatchesByFilter } = require('../utils')

describe('splitMatchesByFilter', () => {
  test('ASC list', () => {
    const matches = [
      { stars: 0, name: '#0' },
      { stars: 1, name: '#1' },
      { stars: 2, name: '#2' },
      { stars: 3, name: '#3' },
      { stars: 4, name: '#4' },
      { stars: 5, name: '#5' },
    ]

    const result = splitMatchesByFilter(matches)

    expect(result.length).toBe(6)
    expect(result[0].length).toBe(matches.length)
    expect(result[5].length).toBe(1)
  })

  test('Leaky list', () => {
    const matches = [
      { stars: 5, name: '#0' },
      { stars: 5, name: '#1' },
      { stars: 5, name: '#2' },
      { stars: 1, name: '#5' },
      { stars: 1, name: '#6' },
    ]

    const result = splitMatchesByFilter(matches)

    expect(result.length).toBe(6)
    expect(result[2].length).toBe(3)
  })

  test('Empty list', () => {
    const matches = undefined

    const result = splitMatchesByFilter(matches)

    expect(result.length).toBe(0)
  })
})
