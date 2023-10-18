const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  collectCoverageFrom: [
    // TEST TYPESCRIPT
    'src/**/*.ts',

    // DO NOT TEST
    '!src/**/*.spec.ts', // Unit tests
    '!src/**/stories/**', // Storybook Project
    '!src/**/*.stories.ts', // Storybook Files
    '!src/**/index.ts', // Barrel files
    '!src/**/*.module.ts', // Modules
    '!src/**/environments/**', // Environments
    '!src/**/main.ts', // Main
    '!src/**/polyfills.ts', // Polyfills
    '!src/**/*.mock.ts', // Mocks
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 85,
      lines: 90,
      statements: 90,
    },
  },
  /* TODO: Update to latest Jest snapshotFormat
   * By default Nx has kept the older style of Jest Snapshot formats
   * to prevent breaking of any existing tests with snapshots.
   * It's recommend you update to the latest format.
   * You can do this by removing snapshotFormat property
   * and running tests with --update-snapshot flag.
   * Example: "nx affected --targets=test --update-snapshot"
   * More info: https://jestjs.io/docs/upgrading-to-jest29#snapshot-format
   */
  snapshotFormat: { escapeString: true, printBasicPrototype: true },
};
