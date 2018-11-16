// 01. ARRAY OPERATIONS

// head
const head = ([first]) => first;

// tail
const tail = ([first, ...rest]) => rest;

// init
const init = (array) => array.slice(0, -1);

// last
const last = (array) => array.slice(-1);


// TESTS

// const array = [6, 2, 3, 5];
// console.log(head(array));
// console.log(tail(array));
// console.log(init(array));
// console.log(last(array));



// 02. CONCAT
// concat
const concat = (a, b) => [...a, ...b];

// multiple concat
const multipleConcat = (first, ...rest) => concat(first, rest.length > 1 ? multipleConcat(head(rest), ...tail(rest)) : head(rest));


// TESTS

// const test1 = [1, 4, 3, 2];
// const test2 = [6, 6, 2, 3];
// const test3 = [5, 3, 5, 2];
// const test4 = [6, 3, 5, 6, 8];
// console.log(multipleConcat(test1, test2, test3, test4));


