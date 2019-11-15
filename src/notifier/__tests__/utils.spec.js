const { formatUTCString } = require('../utils')
describe('utils', () => {
  describe('formateDate', () => {
    test('', () => {
      const date = 'Wed, 19 Apr 2000 20:09:59 GMT'
      expect(formatUTCString(date)).toMatchInlineSnapshot(`"19 Apr 20:09 UTC"`)
    })
    test('', () => {
      const date = 'Wed, 09 Apr 2000 01:09:59 GMT'
      expect(formatUTCString(date)).toMatchInlineSnapshot(`"09 Apr 01:09 UTC"`)
    })
  })
})
