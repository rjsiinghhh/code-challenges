// Sum Numbers
function sum (numbers) {
    let sum = 0;
    // "use strict";
    if (numbers.length == 0) {
        return 0;
    } else {
        for(let i = 0; i < numbers.length; i++){
          sum += numbers[i];
        }
      return sum;
    }

    
};