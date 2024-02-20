let names = ['Dorcas', 'Mary', 'Gift', 'Nelly'];

names.forEach((n) => {
    console.log(n);
})

//RESULT=
// Dorcas
// Mary 
// Gift 
// Nelly


let count = 0;
names.forEach((n) => {
    count++;
});
console.log(count);

for (let i = 2; i < names.length; i = i + 2){
    console.log(names[i]);
}
