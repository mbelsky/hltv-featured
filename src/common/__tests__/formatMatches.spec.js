const { convertUnixTimestampToDateTime } = require('../formatMatches')

// Disable bcs datetime uses NBSPs
/* eslint-disable no-irregular-whitespace */
describe('formatMatches', () => {
  describe('convertUnixTimestampToDateTime', () => {
    const timestamp = 1586690322958
    test('without offset', () => {
      expect(convertUnixTimestampToDateTime(timestamp)).toMatchInlineSnapshot(
        `"12 Apr 11:18 UTC"`,
      )
    })

    test('with offset', () => {
      const moscowOffset = 3 * 3600 * 1000
      expect(
        convertUnixTimestampToDateTime(timestamp, moscowOffset),
      ).toMatchInlineSnapshot(`"12 Apr 14:18"`)
    })
  })
})
