var chalk = require('chalk')
function Dog(name){
	this.name = name;
	this.stomath = [];
}
Dog.prototype.sayHi = function(){
	console.log("Hello các bạn tôi tên là "+chalk.red(this.name))
};
Dog.prototype.eat = function(meo){
	this.stomath.push(meo)
};
module.exports = Dog;