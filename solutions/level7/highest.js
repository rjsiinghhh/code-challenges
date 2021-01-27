function highAndLow(numbers) {
    let num = numbers.split(' ');
    // taking the string and spliting into an array
    num.sort();
    // sorting the array
    let low = 100000;
    let high = -100000;
    for (let i = 0; i < num.length; i++) {
        // for loop to count through the array
        if (num[i] * 1 < low)
        //  number, after converted to integer is less than low
            low = num[i]
            // thats the low
        if (num[i] * 1 > high)
        // number, after converted to integer is more than high
            high = num[i]
            // thats the high
    }
    return high + ' ' + low
}