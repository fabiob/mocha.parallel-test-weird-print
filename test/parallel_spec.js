const parallel = require('mocha.parallel');

describe('sample test', () => {
  parallel('p', () => {
    'a b c d e f g h'.split(' ').forEach(letter => {
      it('should wait for ' + letter, () => {
        return new Promise(resolve => setTimeout(resolve, 1000));
      });
    });
  });
});
