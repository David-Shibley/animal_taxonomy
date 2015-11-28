var Primate = require('./primate.js');

var Hominid = Object.create(Primate);

Hominid.name = 'Great Apes';
Hominid.thumbs = 'opposable';

module.exports = Hominid;
