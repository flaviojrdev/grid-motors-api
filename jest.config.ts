export default {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@entities/(.*)$': '<rootDir>/src/api/entities/$1',
    '^@errors/(.*)$': '<rootDir>/src/api/errors/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/api/interfaces/$1',
    '^@middlewares/(.*)$': '<rootDir>/src/api/middlewares/$1',
    '^@routes/(.*)$': '<rootDir>/src/api/routes/$1',
    '^@useCases/(.*)$': '<rootDir>/src/api/useCases/$1',
    '^@utils/(.*)$': '<rootDir>/src/api/utils/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1',
  },
  testMatch: ['**/*.test.ts'],
  testPathIgnorePatterns: ['node_modules', 'dist'],
}
