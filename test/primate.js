var assert = require('assert');
var Primate = require('../src/primate.js');

describe('Array', function() {
  describe('primate_cell', function() {
    it('should return multicellular', function() {
      assert.equal('multicellular', Primate.cell);
    });
  });
});

describe('Array', function() {
  describe('primate_coat', function() {
    it('should return fur', function() {
      assert.equal('fur', Primate.coat);
    });
  });
});

describe('Array', function() {
  describe('primate_motile', function() {
    it('should return true', function() {
      assert.equal(true, Primate.motile);
    });
  });
});

describe('Array', function() {
  describe('primate_glands', function() {
    it('should return true', function() {
      assert.equal(true, Primate.mammoryGlands);
    });
  });
});

describe('Array', function() {
  describe('primate_name', function() {
    it('should return mammal', function() {
      assert.equal('primate', Primate.name);
    });
  });
});

describe('Array', function() {
  describe('primate_diet', function() {
    it('should return true', function() {
      assert.equal('heterotroph', Primate.diet);
    });
  });
});

describe('Array', function() {
  describe('primate_brain', function() {
    it('should return large', function() {
      assert.equal('large', Primate.brain);
    });
  });
});

describe('Array', function() {
  describe('primate_stereoscopic', function() {
    it('should return true', function() {
      assert.equal(true, Primate.stereoscopic);
    });
  });
});
