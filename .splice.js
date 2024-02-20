
let names = ['Dorcas', 'Mary', 'Gift', 'Nelly'];

// .splice(a, b) is for deleting and adding values


names.splice(1, 1);
console.log(names);

//RESULT=['Dorcas', 'Gift', 'Nelly']

//e.g2
names.splice(1, 2);
console.log(names);

//RESULT=['Dorcas','Nelly']



let namesCopy=[...names];
namesCopy.splice(1, 1);
console.log(names);
console.log(namesCopy);

//RESULT=['Dorcas', 'Mary', 'Gift', 'Nelly']
//RESULT=['Dorcas', 'Gift', 'Nelly']

/*
((1)where to start deeleting,(2) no of items to delete, (Bill, Bob)what to add in)
*/


names.splice(1, 2, 'Bill', 'Bob');
console.log(names);

//RESULT=['Dorcas', 'Bill', 'Bob', 'Nelly']

