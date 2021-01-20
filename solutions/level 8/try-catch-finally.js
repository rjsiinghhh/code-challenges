// objectives

// try to reverse a string 8 using the split, reverse, and join methods

// if an exception is thrown, catch it and print the contents of the exception's message ON A NEW LINE

// print 8 on a new line, if no exception was thrown, then this should be the reversed string, if an exception was thrown, this should be the original string 





// sample input -- 1234

// sample output  -- 4321




// sample input -- Number(1234)


// sample output -- s.split is not a function 1234




function reverseString(s) {
    try {
      console.log(s.split('').reverse().join(''))
    } catch (error) {
        console.log(err.message);
        // console.log(s);   
    } finally {
        console.log(s);
    }
}
