var Mammalia = require('./mammalia.js');

var Primate = Object.create(Mammalia);

Primate.brain = 'large';
Primate.name = 'primate';
Primate.stereoscopic = true;

module.exports = Primate;
