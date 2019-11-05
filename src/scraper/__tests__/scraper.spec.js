jest.mock('axios', () => () =>
  Promise.resolve({ data: require('./matches-example') }),
)
jest.mock('../manageMatches', () => ({
  removeOutdatedMatches: () => Promise.resolve(),
  saveFeaturedMatches: () => 42,
}))

const scrap = require('../index')

describe('scraper', () => {
  test('integration', async () => {
    expect(await scrap()).toBe(42)
  })
})
