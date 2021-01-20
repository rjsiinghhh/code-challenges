const flip = (d,a)=> {
    let numbers = [];
    let newNumbers = [];
    // if and else state
    // 'r' sorts the array and goes from lowest to greatest values
    // 'l' sorts the array and goes from highest to lowest
    for(let i=0; i< a.length; i++) {
        numbers.push(a[i]+ ' ');
    }
if (d == 'R') {
    numbers.sort() 
} else {
    numbers.sort().reverse() 
}
console.log(numbers);
for(let i =0; i< numbers.length; i++) {
    newNumbers.push(numbers[i]* 1);
}
console.log(newNumbers);
return newNumbers;
}


// if i have a string that i need to turn into integers I can muliply the string by 1, subtract by 0, or divide by 1