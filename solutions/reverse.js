const reverseSeq = n => {
    if (n === 0) return []


    leet i = 0;
    let reverse = []
    while(i<n) {
        console.log(reverse.unshift(i+1));
        i++
    }
    return reverse;
}
console.log(reverseSeq(5));

