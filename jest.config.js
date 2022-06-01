module.exports = {
  testEnvironment: 'jsdom',
  roots: ['src/'],
  moduleNameMapper: {
    '\\.(s?css|less)$': 'identity-obj-proxy',
  },
};
