
/*.every() is opposit of some i.e alll condition must be met befor it can bring back a true otherwise its a false*/

let nums = [1, 2, 3, 4, 5, 6];

 let allGreaterThan0 = nums.every((n) => n > 0);
console.log(allGreaterThan0);
//RESULT=True

// let allGreaterThan0 = nums.every((n) => n > 1);
// console.log(allGreaterThan0);
//RESULT=False
