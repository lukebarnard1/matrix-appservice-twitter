const assert = require('assert');
const util = require('../src/util.js');

describe('Util', function () {
  describe('isStrInteger()', function () {
    it('should return false when the string is in the wrong format', function () {
      assert.equal(false, util.isStrInteger(""));
      assert.equal(false, util.isStrInteger('abcde'));
      assert.equal(false, util.isStrInteger('a2bc1d4e'));
    });

    it('should return true when the value is a integer', function () {
      assert.equal(true, util.isStrInteger('12345'));
    });
  });

  describe('isRoomId', function () {
    it('should return false when the string is in the wrong format', function () {
      assert.equal(false, util.isRoomId(""));
      assert.equal(false, util.isRoomId("!:"));
      assert.equal(false, util.isRoomId("!sddsaas"));
      assert.equal(false, util.isRoomId(":saddsd"));
      assert.equal(false, util.isRoomId("!asd94 dd:12 74dd"));
    });


    it('should return true when the value is in the correct format', function () {
      assert.equal(true, util.isRoomId("!foo:bar"));
    });
  });

});
