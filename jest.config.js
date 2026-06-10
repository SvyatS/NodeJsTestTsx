module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: {
    '^#/(.*)$': '<rootDir>/src/$1',
  },
//   transformIgnorePatterns: ['node_modules/(?!decimal.js)'],
};