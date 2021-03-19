module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ["./src/__tests__/testUtils.ts"],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
};