var price1 = 55;
var price2 = 35;
var price3 = 5;
// Increment numbers //
price3++

// Decrement numbers //
 price2--

var addition =  price1 + price2;
var subtraction = price1 - price2;
var multiplication = price1 * price2;
var division = price1 / price3;
var modulus = price1 % price3;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(modulus);
console.log(price2);


// absolute //
var number = -5;
var absoluteValue = Math.abs(number);
console.log(absoluteValue);
// round figure//
var number1 = 10.456;
var result1 = Math.round(number1);
console.log(result1);
//output = 10 //

var number2 = 10.6789;
var result2 = Math.round(number2);
console.log(result2);
//output = 11 //

         // floor vs ceil //

//  floor(x)The value of x rounded down to its nearest integer 
var number3 = 56.6789;
var result3 =Math.floor(number3);
console.log(result3);
//output = 56  //

//  ceil(x) Value of x rounded up to its nearest integer 
var result4 = Math.ceil(number3);
console.log(result4);
//output = 57 //
 
// random number //
// Returns a random number between 0 and 1 //
var num = Math.random()*1000;
 var result = Math.round(num);
console.log(result);

// power pow(x,y) x to the power of y //
// var x = 2;
// var y = 8 ;
var powerValue = Math.pow(2,8);
console.log(powerValue);