// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.



function toBinary(n){
    // top to bottom division
    let binary ;
    while( n > 1 ) {
    // divide by 2
    if (n % 2 == 0) {
     binary += 0;
    } else {
    binary += 1;
     }
     n = Math.floor(n / 2) 
    }


    return binary + 1;
  }