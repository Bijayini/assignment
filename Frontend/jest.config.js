module.exports = {
  moduleDirectories: ['./src', 'node_modules'],
  setupFilesAfterEnv: ['./setupEnzyme.js'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{jsx,js}'],
  coverageReporters: ['json', 'lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 73,
      branches: 51,
      functions: 62,
      lines: 74,
    },
  },
  testPathIgnorePatterns: [
    './setupEnzyme.js',
    'coverage',
    './node_modules/',
  ],
  coveragePathIgnorePatterns: [
    './src/constants',
    './src/utils'
  ],
};
