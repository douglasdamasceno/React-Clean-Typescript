module.exports = {
  roots: ['<rootDir>/src'],
  collectCovereForm: [
    '<rootDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  tranform: {
    '.+\\.ts$': 'ts-jest'
  }
}
