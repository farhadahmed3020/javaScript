const nums = [ 1, 2 ,3, 4, 5, 6,7,8,9,];
const part = nums.slice(2,6);
const remove = nums.splice(2 ,6, 77 );
console.log(remove);

console.log(part);
console.log(nums);

const together = nums.join(",")
console.log(together);