jest.mock('axios', () => () =>
  Promise.resolve({ data: require('./matches-example') }),
)

jest.mock('@hltvf/monitoring/alerter', () => ({}))
jest.mock('@hltvf/monitoring/logger', () => ({
  logFabric: () => () => ({}),
}))

jest.mock('common/manageMatches', () => ({
  removeOutdatedMatches: () => Promise.resolve(),
  saveFeaturedMatches: jest.fn(() => Promise.resolve()),
}))

const scrap = require('../scraper')

describe('scraper', () => {
  test('integration', async () => {
    const manageMatches = require('common/manageMatches')
    const { saveFeaturedMatches } = manageMatches

    expect(await scrap()).toBeUndefined()
    expect(saveFeaturedMatches.mock.calls.length).toBe(1)
    expect(saveFeaturedMatches.mock.calls[0]).toMatchSnapshot()
  })
})
