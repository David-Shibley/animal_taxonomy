var assert = require('assert');
var Hominid = require('../src/hominidae.js');

describe('Array', function() {
  describe('Hominid_cell', function() {
    it('should return multicellular', function() {
      assert.equal('multicellular', Hominid.cell);
    });
  });
});

describe('Array', function() {
  describe('Hominid_coat', function() {
    it('should return fur', function() {
      assert.equal('fur', Hominid.coat);
    });
  });
});

describe('Array', function() {
  describe('Hominid_motile', function() {
    it('should return true', function() {
      assert.equal(true, Hominid.motile);
    });
  });
});

describe('Array', function() {
  describe('Hominid_glands', function() {
    it('should return true', function() {
      assert.equal(true, Hominid.mammoryGlands);
    });
  });
});

describe('Array', function() {
  describe('Hominid_name', function() {
    it('should return mammal', function() {
      assert.equal('Great Apes', Hominid.name);
    });
  });
});

describe('Array', function() {
  describe('Hominid_diet', function() {
    it('should return true', function() {
      assert.equal('heterotroph', Hominid.diet);
    });
  });
});

describe('Array', function() {
  describe('Hominid_brain', function() {
    it('should return large', function() {
      assert.equal('large', Hominid.brain);
    });
  });
});

describe('Array', function() {
  describe('Hominid_stereoscopic', function() {
    it('should return true', function() {
      assert.equal(true, Hominid.stereoscopic);
    });
  });
});

describe('Array', function() {
  describe('Hominid_thumbs', function() {
    it('should return opposable', function() {
      assert.equal('opposable', Hominid.thumbs);
    });
  });
});
