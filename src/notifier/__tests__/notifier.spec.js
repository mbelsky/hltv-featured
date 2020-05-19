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

beforeEach(() => {
  telegram.sendMessage = jest.fn()
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
})
