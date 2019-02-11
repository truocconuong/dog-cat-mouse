var Dog = require('./Dog');
var dog = new Dog('Mạnh');
var Mew = require ('./index')
var mew = new Mew('Híc');
dog.sayHi();
dog.eat(mew);
console.log(dog)