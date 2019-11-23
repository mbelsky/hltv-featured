jest.mock('axios', () => () =>
  Promise.resolve({ data: require('./matches-example') }),
)
jest.mock('common/manageMatches', () => ({
  removeOutdatedMatches: () => Promise.resolve(),
  saveFeaturedMatches: () => Promise.resolve(),
}))

const scrap = require('../index')

describe('scraper', () => {
  test('integration', async () => {
    expect(await scrap()).toBeUndefined()
  })
})
