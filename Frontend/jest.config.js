module.exports = {
  moduleDirectories: ['./src', 'node_modules'],
  setupFilesAfterEnv: ['./setupEnzyme.js'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{jsx,js}'],
  coverageReporters: ['json', 'lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 54,
      branches: 48,
      functions: 44,
      lines: 56,
    },
  },
  moduleNameMapper: { "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js", "\\.(css|scss)$": "<rootDir>/assetsTransformer.js"},
  testPathIgnorePatterns: [
    './setupEnzyme.js',
    'coverage',
    './node_modules/',
    './src/styles/'
  ],
  coveragePathIgnorePatterns: [
    './src/constants',
    './src/labels',
    './src/styles/'
  ],
};
