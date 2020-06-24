// moduleNameMapper should work on resolved import paths
// https://github.com/facebook/jest/issues/7271
// import { foo } from '/lib/example';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { foo } = require('/lib/example');

describe('example', () => {
  describe('foo', () => {
    test('returns true', () => {
      expect(foo()).toEqual(true);
    });
  });
});

