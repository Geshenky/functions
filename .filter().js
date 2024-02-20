

//.filter() only runs element in the array that match the condition

let posts = [
    {title: 'post 1', author:'Dan'},
    {title: 'post 2', author:'Dan'},
    {title: 'post 3', author:'Sarah'},
];
let dansPosts = posts.filter(p => p.author === 'Dan');
console.log(dansPosts);

/*
RESULT =
0: {title: 'post 1', author:'Dan'}
1: {title: 'post 2', author:'Dan'}
Length: 2 
*/