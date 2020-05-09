const { MESSAGE_TYPES } = require('../consts')
const { sendMessages } = require('../sendMessages')

const telegram = {}
const updateUser = jest.fn()

const makeArgs = (messages) => ({
  telegram,
  updateUser,
  usersTgMessages: messages,
})

beforeEach(() => {
  telegram.sendMessage = jest.fn()
})

describe('sendMessages', () => {
  test('single featuredMatches message', async () => {
    const messages = [{ messages: [{ type: MESSAGE_TYPES.featuredMatches }] }]

    await sendMessages(makeArgs(messages))

    expect(telegram.sendMessage.mock.calls.length).toBe(1)
  })

  test('single emptyFeaturedMatches message', async () => {
    const messages = [
      { messages: [{ type: MESSAGE_TYPES.emptyFeaturedMatches }] },
    ]

    await sendMessages(makeArgs(messages))

    expect(telegram.sendMessage.mock.calls.length).toBe(1)
  })

  test('do not send emptyFeaturedMatches message if there are matches', async () => {
    const messages = [
      {
        messages: [
          { type: MESSAGE_TYPES.emptyFeaturedMatches },
          {
            text: 'favoriteTeamsMatches',
            type: MESSAGE_TYPES.favoriteTeamsMatches,
          },
        ],
      },
    ]

    await sendMessages(makeArgs(messages))

    expect(telegram.sendMessage.mock.calls.length).toBe(1)
    expect(telegram.sendMessage.mock.calls[0][1]).toBe('favoriteTeamsMatches')
  })

  test('do not send customLocation message if there is no matches message', async () => {
    let messages = [
      {
        messages: [{ type: MESSAGE_TYPES.customLocation }],
      },
    ]

    await sendMessages(makeArgs(messages))

    expect(telegram.sendMessage.mock.calls.length).toBe(0)

    messages = [
      {
        messages: [
          {
            text: 'emptyFeaturedMatches',
            type: MESSAGE_TYPES.emptyFeaturedMatches,
          },
          { type: MESSAGE_TYPES.customLocation },
        ],
      },
    ]

    await sendMessages(makeArgs(messages))

    expect(telegram.sendMessage.mock.calls.length).toBe(1)
    expect(telegram.sendMessage.mock.calls[0][1]).toBe('emptyFeaturedMatches')
  })
})
