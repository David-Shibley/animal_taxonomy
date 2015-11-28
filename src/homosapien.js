var Homo = require('./homo.js');

var People = Object.create(Homo);
var Person = function(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.email = email;
};

People.david = new Person('david', 27, 'male');

module.exports = People;
