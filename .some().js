
//.some() is used to check some values in the array that passes the test or meet the condition.


 let nums = [1, 2, 3, 4, 5, 6];

let isGreaterThan5 = nums.some((n) => n > 5);

console.log(isGreaterThan5);
// //RESULT = True

// let isGreaterThan5 = nums.some((n) => n > 6);

// console.log(isGreaterThan5);
// RESULT = false

