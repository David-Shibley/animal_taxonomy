var assert    = require('assert');
var Mammalia  = require('../src/mammalia.js');

describe('Array', function() {
  describe('mammals_cell', function() {
    it('should return multicellular', function() {
      assert.equal('multicellular', Mammalia.cell);
    });
  });
});

describe('Array', function() {
  describe('mammals_coat', function() {
    it('should return fur', function() {
      assert.equal('fur', Mammalia.coat);
    });
  });
});

describe('Array', function() {
  describe('mammals_motile', function() {
    it('should return true', function() {
      assert.equal(true, Mammalia.motile);
    });
  });
});

describe('Array', function() {
  describe('mammals_glands', function() {
    it('should return true', function() {
      assert.equal(true, Mammalia.mammoryGlands);
    });
  });
});

describe('Array', function() {
  describe('mammals_name', function() {
    it('should return mammal', function() {
      assert.equal('mammal', Mammalia.name);
    });
  });
});

describe('Array', function() {
  describe('chordata_diet', function() {
    it('should return true', function() {
      assert.equal('heterotroph', Mammalia.diet);
    });
  });
});
