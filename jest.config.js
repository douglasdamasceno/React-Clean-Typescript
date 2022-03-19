module.exports = {
  roots: ['<rootDir>/src'],
  // collectCovereForm: [
  //   '<rootDir>/src/**/*.{ts,tsx}'
  // ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
