function pipeFix(numbers){
    let newNumbers = [];
   // for loop to count upwards
    for(let i = numbers[0]; i<= numbers[numbers.length-1]; i++) {
      // to find missing numbers
      //if(i in numbers)
      newNumbers.push(i)
    }
    
    // check if the numbers exist and place missing numbers into list 
    // take from "numbers" and place into "newnumbers"
    return newNumbers
    
  }