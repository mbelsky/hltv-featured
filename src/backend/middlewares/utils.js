/**
 * @param {string} text
 * @returns number
 */
const getFilterValue = (text) => (text.match(/⭐️/g) || []).length

module.exports = {
  getFilterValue,
}
