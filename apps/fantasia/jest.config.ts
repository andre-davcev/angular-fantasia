/* eslint-disable */
export default {
  preset: 'jest-preset-angular',
  coverageDirectory: '../../coverage/apps/fantasia/',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
