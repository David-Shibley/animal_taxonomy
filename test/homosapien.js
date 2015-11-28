var assert = require('assert');
var People = require('../src/homosapien.js');

describe('Array', function() {
  describe('People_cell', function() {
    it('should return multicellular', function() {
      assert.equal('multicellular', People.cell);
    });
  });
});

describe('Array', function() {
  describe('People_coat', function() {
    it('should return fur', function() {
      assert.equal('fur', People.coat);
    });
  });
});

describe('Array', function() {
  describe('People_motile', function() {
    it('should return true', function() {
      assert.equal(true, People.motile);
    });
  });
});

describe('Array', function() {
  describe('People_glands', function() {
    it('should return true', function() {
      assert.equal(true, People.mammoryGlands);
    });
  });
});

describe('Array', function() {
  describe('david_name', function() {
    it('should return david', function() {
      assert.equal('david', People.david.name);
    });
  });
});

describe('Array', function() {
  describe('People_diet', function() {
    it('should return true', function() {
      assert.equal('heterotroph', People.diet);
    });
  });
});

describe('Array', function() {
  describe('People_brain', function() {
    it('should return large', function() {
      assert.equal('large', People.brain);
    });
  });
});

describe('Array', function() {
  describe('People_stereoscopic', function() {
    it('should return true', function() {
      assert.equal(true, People.stereoscopic);
    });
  });
});

describe('Array', function() {
  describe('People_thumbs', function() {
    it('should return opposable', function() {
      assert.equal('opposable', People.thumbs);
    });
  });
});

describe('Array', function() {
  describe('People_thumbs', function() {
    it('should return true', function() {
      assert.equal(true, People.human);
    });
  });
});

describe('Array', function() {
  describe('People_age', function() {
    it('should return true', function() {
      assert.equal(27, People.david.age);
    });
  });
});
