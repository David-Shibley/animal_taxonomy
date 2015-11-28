var assert = require('assert');
var Homo = require('../src/homo.js');

describe('Array', function() {
  describe('Homo_cell', function() {
    it('should return multicellular', function() {
      assert.equal('multicellular', Homo.cell);
    });
  });
});

describe('Array', function() {
  describe('Homo_coat', function() {
    it('should return fur', function() {
      assert.equal('fur', Homo.coat);
    });
  });
});

describe('Array', function() {
  describe('Homo_motile', function() {
    it('should return true', function() {
      assert.equal(true, Homo.motile);
    });
  });
});

describe('Array', function() {
  describe('Homo_glands', function() {
    it('should return true', function() {
      assert.equal(true, Homo.mammoryGlands);
    });
  });
});

describe('Array', function() {
  describe('Homo_name', function() {
    it('should return human', function() {
      assert.equal('human', Homo.name);
    });
  });
});

describe('Array', function() {
  describe('Homo_diet', function() {
    it('should return true', function() {
      assert.equal('heterotroph', Homo.diet);
    });
  });
});

describe('Array', function() {
  describe('Homo_brain', function() {
    it('should return large', function() {
      assert.equal('large', Homo.brain);
    });
  });
});

describe('Array', function() {
  describe('Homo_stereoscopic', function() {
    it('should return true', function() {
      assert.equal(true, Homo.stereoscopic);
    });
  });
});

describe('Array', function() {
  describe('Homo_thumbs', function() {
    it('should return opposable', function() {
      assert.equal('opposable', Homo.thumbs);
    });
  });
});

describe('Array', function() {
  describe('Homo_thumbs', function() {
    it('should return true', function() {
      assert.equal(true, Homo.human);
    });
  });
});
