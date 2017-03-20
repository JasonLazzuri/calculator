var weight = parseInt(prompt("what do you weigh?"));
var heightInches = parseInt(prompt("How many inches tall are you?"));

var bmi = function( weight, heightInches) {
 return ((weight/(heightInches*heightInches))*703);
};

alert(bmi(weight, heightInches));
