// prompt
// print the numbers 1 - 100.  But, if the number is divisible by 3, print "Fizz".  If the number is divisible by 5, print "Buzz".  Finally, if the number is divisble by 3 and 5, print "FizzBuzz".














for(let i= 1; i <= 100; i++) {





  // Number divisble by 3 and 5 print "Fizzbuzz" ex 15, 30, 45, 60, 75



  if( i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  }




// If the number is divisble by 3 print "Fizz" ex. 3, 6, 9, 12
// write an if state that incriments to every third number and assigns it the string "Fizz"
// (9%3)





 else if (i % 3 === 0){

console.log('Fizz' );
}




// If the number is diviisble by 5 print "Buzz" ex 5, 10, 15, 20, 25


else if ( i % 5 === 0) {
  console.log('Buzz');
}


else {console.log(i)}

}
