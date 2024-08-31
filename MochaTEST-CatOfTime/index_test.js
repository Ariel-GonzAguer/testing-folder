const assert = require('assert')
const CatOfTime = require('./index')

describe('CatOfTime', () => {

  describe('.announceDawn', () => {
    it('returns a kitty call', () => {
      //setup
      const expected = 'Miauuuu!';
      //exercise
      const actual = CatOfTime.announceDawn();
      //verify
      assert.strictEqual(expected, actual);
    })
  });


  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //setup
      let expected = '13';
      //exercise
      let actual = CatOfTime.timeAtDawn(13);
      //verify
      assert.strictEqual(expected, actual);
    })
  });

  it('throws an error if passed a number less than 0', () => {
    assert.throws(
      () => {
        CatOfTime.timeAtDawn(-1);
      },
      RangeError
    );
  });

  it('throws an error if passed a number greater than 23', () => {
    assert.throws(
      () => {
        CatOfTime.timeAtDawn(24);
      },
      RangeError
    );
  })
})