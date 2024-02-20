//.map() doubles the array and send it back
//protect the new array from the first array

let nums = [1, 2, 3, 4, 5, 6];

let doubled = nums.map((n) => n * 2);
console.log(doubled);

//RESULT = [2, 4, 6, 8, 10, 12]