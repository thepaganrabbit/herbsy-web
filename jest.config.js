module.exports = {
  testEnvironment: 'jsdom',
  roots: ['src/'],
  moduleNameMapper: {
    '\\.(s?css|less)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
};
