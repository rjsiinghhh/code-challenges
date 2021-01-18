function index(array, n){
    // if n is greater than the length of the array
    if( n > array.length) {
        return -1;
        // then return -1
    }
    else {
        // if n is less than the array, the find the index of 'n' in the array and multiply to the power of 'n'
        // example below
    return Math.pow(array[n], n)
        }
    }


    // example
  // array[n]^n