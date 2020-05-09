const { makeTgMessages } = require('../makeTgMessages')

const rawMessages = [
  {
    id: -1,
    featuredMatches: { message: 'featuredMatches', type: 'EMPTY' },
  },
  {
    id: 0,
    featuredMatches: { message: 'featuredMatches', type: 'SUCCESS' },
  },
  {
    id: 1,
    favoriteTeamsMatches: 'favoriteTeamsMatches',
  },
  {
    id: 2,
    customLocationMessage: 'customLocationMessage',
  },
  {
    id: 3,
  },
]

describe('makeTgMessages', () => {
  test('common', () => {
    expect(makeTgMessages(rawMessages)).toMatchSnapshot()
  })
})
