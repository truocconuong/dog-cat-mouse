var chalk = require('chalk')
function Dog(name){
	this.name = name;
}
Dog.prototype.sayHi = function(){
	console.log("Hello các bạn tôi tên là "+chalk.red(this.name))
};
module.exports = Dog;