function fibonacci(n) {


  if (n < 1) {
    return [];
    // if the number given is less than 1, return nothing
  }
  if (n == 1) {
    return [0];
    // if the number given is equal to 1, return 1
  } 
  if(n == 2) {
    return [0,1]
    // if the number given is 2, then return back [0,1]
  }
  let fib = [0, 1];
  // set the variable to [0,1]
  let i = 2;
  while(i < n) {
    // adding the sum of the last two numbers in the array and adding that to the end of the array
    fib.push(fib[i-1]+ fib[i -2])
    i++
    // this increases the index by 1
  }
  return fib;
  
}


// fibonacci sequence 

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89  