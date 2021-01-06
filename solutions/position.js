function position(letter) {

    const alpha = 'abcdefghijklmnopqrstuvwxyz';
// assign each letter a number 
// create an array to store data 
    for(let i=0; i< alpha.length; i++) {
        //  var letter equals value of whats inside alpha
        if (letter === alpha[i]) {
            // console.log(letter);
            // console.log(alpha[i]);
            return i +1;
        }
        // console.log(i+1);
    }
    // console.log(alpha[23 - 1]);
    // return (position);
}
console.log(position('y'));