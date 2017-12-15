const parallel = require('mocha.parallel');

describe('sample test', () => {
  describe('without mocha.parallel', () => {
    it('should pass', () => {});
  });
  parallel('with mocha.parallel', () => {
    it('should pass', () => {});
  });
});
