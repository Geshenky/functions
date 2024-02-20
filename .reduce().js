
//.reduce() is to reduce an array down to a single value by summing up the arrays

let nums = [1, 2, 3, 4, 5, 6];

let total = nums.reduce((total, currentVal) => total + currentVal);
console.log(total);
//RESULT= 21

//The total value has been specified to be 10
// let total = nums.reduce((total, currentVal) => total + currentVal, 10);
// console.log(total);
// //RESULT= 31

/*
let total = nums.reduce((a, b) => Math.max(a, b),  -Infinity);
console.log(total);
*/
//RESULT= 6
