// write a program to check two numbers and return true if one of the numbers is 100
// or if the sum of the two numbers is 100


// take two parameters 

const isEqualTo100 = (a,b) => a === 100 || b === 100;
console.log(isEqualTo100(100,0));



const isSum = (a, b) => a + b === 100;
console.log(isSum(95,5));



// better answer


const isEqual = (a, b) => a === 100 || b === 100 || (a + b) === 100;
console.log(isEqual(99, 1));





