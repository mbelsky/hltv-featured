const MAX_COVERAGE = {
  branches: 100,
  functions: 100,
  lines: 100,
  statements: 100,
}

module.exports = {
  coverageThreshold: {
    './src/common': MAX_COVERAGE,
    './src/notifier': {
      branches: 87,
      functions: 96,
      lines: 86,
      statements: 87,
    },
    './src/notifier/make*.js': MAX_COVERAGE,
    './src/notifier/utils.js': MAX_COVERAGE,
    './src/notifier/messages': MAX_COVERAGE,
  },
  testMatch: ['**/__tests__/*.spec.js'],
}
