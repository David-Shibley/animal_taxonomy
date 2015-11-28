var Hominid = require('./hominidae.js');

var Homo = Object.create(Hominid);

Homo.human = true;
Homo.name = 'human';

module.exports = Homo;
