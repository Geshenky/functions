
// .find() is used to find a value in an array

let stock = [
    {item:'ketchup', quantity: 32},
    {item:'mayo', quantity: 9},
    {item:'hot sauce', quantity: 12},
];
let mayo = stock.find((s) => s.item === 'mayo');
console.log(mayo);
//RESULT = {item:'mayo', quantity: 9}
console.log(mayo.quantity);
// //RESULT = 9
