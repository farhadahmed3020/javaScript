//Map uses //

const numbers = [5,6,7,34,22,26,99];
const output = [];

for(let i= 0; i < numbers.length; i++){
    const element = numbers[i]
    const result = element * element ;
    output.push(result);
}
console.log(output);

 //Or /
function square (element){
    return element * element ;
}
const square = element => element * element ;
const square = x => x* x ;

 // or /

 const result = numbers.map(function(element){
   return element* element ;
})

 // Or //

const result = numbers.map(x => x * x);

console.log(result);


// Filter //

const biggerNumber = numbers.filter ( x => x > 5 );
console.log(biggerNumber);

// Find (find  return a element  but filter return array) //


const isThere = numbers.find(x => x >5 );
console.log(isThere);


