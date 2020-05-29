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
jest.mock('common/manageTeams', () => ({
  addTeams: jest.fn(() => Promise.resolve()),
}))

const scrap = require('../scraper')

describe('scraper', () => {
  test('integration', async () => {
    const { saveFeaturedMatches } = require('common/manageMatches')
    const { addTeams } = require('common/manageTeams')

    expect(await scrap()).toEqual([undefined, undefined])

    expect(saveFeaturedMatches.mock.calls.length).toBe(1)
    expect(saveFeaturedMatches.mock.calls[0]).toMatchSnapshot()

    expect(addTeams.mock.calls.length).toBe(1)
    expect(addTeams.mock.calls[0]).toMatchSnapshot()
  })
})
