module.exports = {
  getFilterValue: (text) => (text.match(/⭐️/g) || []).length,
}
