const { getTeams } = require('../getTeams')

const matches = [
  {
    title: 'HellRaisers vs MELBET/EXTREMUM loser',
  },
  {
    title: 'Illuminar vs Ancient',
  },
  {
    title: 'MIBR vs AVANGAR',
  },
  {
    title: 'TBD vs TBD',
  },
  {
    title: 'Evil Geniuses vs AVANGAR',
  },
  {
    title: 'TBD vs TBD',
  },
]

describe('getTeams', () => {
  test('getTeams', () => {
    expect(getTeams(matches)).toMatchInlineSnapshot(`
      Array [
        "hellraisers",
        "melbet/extremum loser",
        "illuminar",
        "ancient",
        "mibr",
        "avangar",
        "tbd",
        "evil geniuses",
      ]
    `)
  })
  test('throws exception', () => {
    expect(() => getTeams([{ title: 'TBDvs' }])).toThrow()
  })
})
