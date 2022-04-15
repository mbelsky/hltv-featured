const { _notify } = require('../notifier')

const fetchDataFb = (users) => async () => {
  return {
    matches: [
      {
        stars: 2,
        id: 2341452,
        event: 'CLUTCH Season 2',
        href:
          'https://www.hltv.org/matches/2341452/w7m-vs-red-canids-clutch-season-2',
        title: 'W7M vs RED Canids',
        unixTimestamp: 1589749051000,
      },
    ],
    timeZoneOffsetsMap: {
      'Europe/Moscow': 10800,
    },
    users,
  }
}
const log = () => {}
const telegram = {}
const updateUser = jest.fn()
let processEnv

beforeAll(() => {
  processEnv = process.env
})

beforeEach(() => {
  process.env.NODE_ENV = 'production'
  telegram.sendMessage = jest.fn()
})

afterAll(() => {
  process.env = processEnv
})

describe('_notify', () => {
  test('send featured match message', async () => {
    const fetchData = fetchDataFb({
      0: {
        filter: 1,
        location: {
          timeZoneId: 'Europe/Moscow',
        },
      },
    })

    await _notify({
      fetchData,
      log,
      telegram,
      updateUser,
    })

    expect(telegram.sendMessage.mock.calls.length).toBe(1)
    expect(telegram.sendMessage.mock.calls[0]).toMatchSnapshot()
  })

  test('send empty featured match message', async () => {
    const fetchData = fetchDataFb({
      1: {
        filter: 4,
      },
    })

    await _notify({
      fetchData,
      log,
      telegram,
      updateUser,
    })

    expect(telegram.sendMessage.mock.calls.length).toBe(1)
    expect(telegram.sendMessage.mock.calls[0]).toMatchSnapshot()
  })

  test('send favorite team match message', async () => {
    const fetchData = fetchDataFb({
      2: {
        filter: 4,
        favorites: ['w7m'],
        seenCustomizeLocationMessage: true,
      },
    })

    await _notify({
      fetchData,
      log,
      telegram,
      updateUser,
    })

    expect(telegram.sendMessage.mock.calls.length).toBe(1)
    expect(telegram.sendMessage.mock.calls[0]).toMatchSnapshot()
  })

  test('does not create & send favorite team match message', async () => {
    const fetchData = fetchDataFb({
      2: {
        filter: 4,
        favorites: ['navi'],
        seenEmptyMessage: true,
      },
    })

    await _notify({
      fetchData,
      log,
      telegram,
      updateUser,
    })

    expect(telegram.sendMessage.mock.calls.length).toBe(0)
  })

  test('does not send empty message second time for same users', async () => {
    const fetchData = fetchDataFb({
      2: {
        filter: 4,
        seenEmptyMessage: true,
      },
    })

    await _notify({
      fetchData,
      log,
      telegram,
      updateUser,
    })

    expect(telegram.sendMessage.mock.calls.length).toBe(0)
  })

  test('send custom location message', async () => {
    const fetchData = fetchDataFb({
      3: {
        filter: 0,
      },
    })

    await _notify({
      fetchData,
      log,
      telegram,
      updateUser,
    })

    expect(telegram.sendMessage.mock.calls.length).toBe(2)
    expect(telegram.sendMessage.mock.calls[1]).toMatchSnapshot()
  })

  test('create and do not send custom location message', async () => {
    const fetchData = fetchDataFb({
      3: {
        filter: 5,
      },
    })

    await _notify({
      fetchData,
      log,
      telegram,
      updateUser,
    })

    expect(telegram.sendMessage.mock.calls.length).toBe(1)
    expect(telegram.sendMessage.mock.calls[0]).toMatchSnapshot()
  })

  describe('dev enviroment', () => {
    const fetchData = fetchDataFb({
      128526: {
        filter: 1,
        location: {
          timeZoneId: 'Europe/Moscow',
        },
      },
    })

    beforeEach(() => {
      process.env = {}
    })

    test('send a featured match message for dev enviroment', async () => {
      process.env.TELEGRAM_USER_TEST_IDS = '128526'

      await _notify({
        fetchData,
        log,
        telegram,
        updateUser,
      })

      expect(telegram.sendMessage.mock.calls.length).toBe(1)
    })

    test('does not send a featured match message for dev enviroment', async () => {
      await _notify({
        fetchData,
        log,
        telegram,
        updateUser,
      })

      expect(telegram.sendMessage.mock.calls.length).toBe(0)
    })
  })

  test('splits long telegram messages', async () => {
    const fetchData = async () => {
      const match = {
        stars: 2,
        id: 2341452,
        event: 'CLUTCH Season 2',
        href:
          'https://www.hltv.org/matches/2341452/w7m-vs-red-canids-clutch-season-2',
        title: 'W7M vs RED Canids',
        unixTimestamp: 1589749051000,
      }
      const matches = []

      while (matches.length < 100) {
        matches.push(match)
      }

      return {
        matches,
        timeZoneOffsetsMap: {
          'Europe/Moscow': 10800,
        },
        users: {
          0: {
            filter: 1,
            location: {
              timeZoneId: 'Europe/Moscow',
            },
          },
        },
      }
    }

    await _notify({
      fetchData,
      log,
      telegram,
      updateUser,
    })

    expect(telegram.sendMessage.mock.calls.length).toBe(2)
  })
})
