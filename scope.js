let bonus = 20 ;

function sum (first , second){
    let result = first + second + bonus ;
    console.log(bonus);
    return result;
}
const output = sum( 82 ,18);
console.log(bonus);
console.log(output);