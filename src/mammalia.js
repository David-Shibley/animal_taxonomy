var Chordata = require('./chordata.js');

var Mammalia = Object.create(Chordata);

Mammalia.coat = 'fur';
Mammalia.mammoryGlands = true;
Mammalia.name = 'mammal';

module.exports = Mammalia;
