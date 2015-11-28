var Animal = require('./animal.js');

var Chordata = Object.create(Animal);

Chordata.notochord = true;
Chordata.name = 'chordata';

module.exports = Chordata;
