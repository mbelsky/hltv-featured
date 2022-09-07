const { makeUsersTelegramMessages } = require('../makeUsersTelegramMessages')
const {
  EmptyFeaturedMatchesMessage,
  FeaturedMatchesMessage,
} = require('../messages')
const { splitLongTelegramMessage } = require('../splitLongTelegramMessage')
const { mockData } = require('./splitLongTelegramMessage.mock')

const LONG_MESSAGE = `ABC vs XYZ\n\n`.repeat(333) + 'abcdef\n\n123456'
const UNSPLITABLE_MESSAGE = '0123456789'.repeat(10001)

test('throws `Split function is not defined` error', () => {
  const message = makeTelegramMessage(
    new EmptyFeaturedMatchesMessage({ text: LONG_MESSAGE }),
  )

  expect(() => splitLongTelegramMessage(message)).toThrow()
})

test('throws `Unsplitable message` error', () => {
  const message = makeTelegramMessage(
    new FeaturedMatchesMessage({ text: UNSPLITABLE_MESSAGE }),
  )

  expect(() => splitLongTelegramMessage(message)).toThrow()
})

test('splits featured matches message', () => {
  const message = makeTelegramMessage(
    new FeaturedMatchesMessage({ text: LONG_MESSAGE }),
  )

  const result = splitLongTelegramMessage(message)

  expect(result[0]).toBe(`ABC vs XYZ\n\n`.repeat(333).trim())
  expect(result[1]).toBe('abcdef\n\n123456')
})

test('splits real featured matches message', () => {
  const message = makeTelegramMessage(
    new FeaturedMatchesMessage({ text: mockData }),
  )

  const result = splitLongTelegramMessage(message)

  expect(result.length).toBe(2)
})

function makeTelegramMessage(smartMessage) {
  const [{ messages }] = makeUsersTelegramMessages([
    {
      messages: [smartMessage],
    },
  ])
  const [message] = messages

  return message
}
