const { array } = require("prop-types");

// syntax  //
//array.reduce(callback(accumulator ,currentValue ,[,index [array]]) [ , initialValue])//

const numbers = [ 12,13,10,11,15,19];

const total = numbers.reduce(sum ,20);

function sum( accumulator ,value){
    return accumulator + value ;
}

console.log(total);


const total = numbers.reduce((sum , value) => sum + value , 20 )
console.log(total);