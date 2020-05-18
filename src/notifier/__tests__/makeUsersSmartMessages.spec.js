const { makeUsersSmartMessages } = require('../makeUsersSmartMessages')

const rawMessages = [
  {
    id: 3,
  },
]

describe('makeUsersSmartMessages', () => {
  test('common', () => {
    expect(makeUsersSmartMessages(rawMessages)).toEqual([])
  })
})
