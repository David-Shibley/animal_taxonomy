var assert = require('assert');
var Chordata = require('../src/chordata.js');

describe('Array', function() {
  describe('has_notochord', function() {
    it('should return true', function() {
      assert.equal(true, Chordata.notochord);
    });
  });
});

describe('Array', function() {
  describe('chordata_cell', function() {
    it('should return multicellular', function() {
      assert.equal('multicellular', Chordata.cell);
    });
  });
});

describe('Array', function() {
  describe('chordata_name', function() {
    it('should return chordata', function() {
      assert.equal('chordata', Chordata.name);
    });
  });
});

describe('Array', function() {
  describe('chordata_motile', function() {
    it('should return true', function() {
      assert.equal(true, Chordata.motile);
    });
  });
});

describe('Array', function() {
  describe('chordata_diet', function() {
    it('should return true', function() {
      assert.equal('heterotroph', Chordata.diet);
    });
  });
});
