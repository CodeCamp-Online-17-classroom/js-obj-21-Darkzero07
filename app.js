var prompt = require('prompt-sync')();
function Calculator(a, b) {
  this.read = function() {
    this.a = +prompt("a:", 0);
    this.b = +prompt("b:", 0);
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
};

let cal = new Calculator();
cal.read()
console.log(cal.sum());
console.log(cal.mul());

