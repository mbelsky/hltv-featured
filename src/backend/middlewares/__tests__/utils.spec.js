const { FILTER_OPTIONS } = require('../../consts')
const { getFilterValue } = require('../utils')

describe('getFilterValue', () => {
  it('count stars', () => {
    const result = [...FILTER_OPTIONS].map(getFilterValue)

    expect(result).toEqual([1, 2, 3, 4, 0])
  })
})
