let names = ['Dorcas', 'Mary', 'Gift', 'Nelly'];


// .sort() for sorting out values by default sort works on strings

let alph = names.sort();
console.log(alph);
//RESULT= ['Dorcas','Gift', 'Mary', 'Nelly' ]

let nums = [2, 4, 1, 8, 5];
 let sorted = nums.sort();
console.log(sorted);
//RESULT= [1, 2, 4, 5, 8]

// let nums = [2, 4, 11, 8, 5];
// let sorted = nums.sort();
// console.log(sorted);
//RESULT= [11, 2, 4, 5, 8]
//it will treat the values singly ..so to fix it;

// let nums = [2, 4, 11, 8, 5];
// let sorted = nums.sort((a, b) => a - b);
// console.log(sorted);
//RESULT= [2, 4, 5, 8, 11]

/* Explantion
If a - b gives a -ve answer atomatically a is lesser than b;it then sort it*/

/*If the answer is needed in a reverse order it will be a b-a instead of a-b */
// let nums = [2, 4, 11, 8, 5];
// let sorted = nums.sort((a, b) => b - a);
// console.log(sorted);
//RESULT= [11, 6, 5, 4, 2]



