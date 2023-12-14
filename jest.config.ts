module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      babel: true,
      tsconfig: 'tsconfig.jest.json'
    }]
  },
  testMatch: [
    '**/*.(test|spec).(ts|tsx)'
  ],
  testPathIgnorePatterns: ['./node_modules/', '.husky'],
  moduleDirectories: ['node_modules', 'app'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/__tests__/**",
    "!**/.*/**",
    "!**/*.config.*",
    "!**/coverage/**",
    "!next-env.d.ts",
  ],
  coverageDirectory: "./coverage",
  coverageReporters: ["html"],
};