// clone
const clone = (source) => ({...source});

// merge
const merge = (source, target) => ({...target, ...source});


//TESTS

// const a = {name: "María", surname: "Ibáñez", country: "SPA"};
// const b = {name: "Luisa", age: 31, married: true};
//
// console.log(merge(a,b));