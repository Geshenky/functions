
// .findIndex() for getting the index value

let stock = [
    {item:'ketchup', quantity: 32},
    {item:'mayo', quantity: 9},
    {item:'hot sauce', quantity: 12},
];
 let mayo = stock.findIndex((s) => s.item === 'mayo');
console.log(mayo);
//RESULT = 1
