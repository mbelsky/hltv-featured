const { makeRawMessages } = require('../makeRawMessages')

const data = {
  matches: [
    {
      stars: 0,
      id: 2341120,
      title: '0 Renegades vs NaVi',
      href: 'https://www.hltv.org/matches/2341120',
      unixTimestamp: 1589090400000,
      event: 'ESL One: Road to Rio - Oceania',
    },
    {
      stars: 5,
      id: 2341125,
      title: '5 Renegades vs ORDER',
      href: 'https://www.hltv.org/matches/2341125',
      unixTimestamp: 1589090400000,
      event: 'ESL One: Road to Rio - Oceania',
    },
  ],
  timeZoneOffsetsMap: {
    'Asia/Bishkek': 21600,
  },
  users: {
    0: {
      seenCustomizeLocationMessage: true,
      seenEmptyMessage: true,
      filter: 5,
    },
    1: {
      filter: 5,
      location: {
        timeZoneId: 'Asia/Bishkek',
      },
    },
    2: {
      filter: 5,
      favorites: ['navi'],
    },
  },
}

describe('makeRawMessages', () => {
  test('common', () => {
    expect(makeRawMessages(data)).toMatchSnapshot()
  })

  test('without matches', () => {
    expect(
      makeRawMessages({
        ...data,
        matches: [],
      }),
    ).toMatchSnapshot()
  })

  test('without favorite matches', () => {
    const { favoriteTeamsMatches } = makeRawMessages({
      ...data,
      users: {
        0: {
          filter: 0,
          favorites: ['unknown team'],
        },
      },
    })

    expect(favoriteTeamsMatches).toBe(undefined)
  })
})
