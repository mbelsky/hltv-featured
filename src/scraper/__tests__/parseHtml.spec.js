const htmlToMatches = require('../parseHtml')
const html = require('./matches-example')

describe('parseHtml', () => {
  describe('htmlToMatches', () => {
    it('Match snapshot', () => {
      const matches = htmlToMatches(html, { root: 'https://example.com' })
      expect(matches).toMatchSnapshot()
    })
  })
})
