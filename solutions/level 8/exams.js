function checkExam(array1, array2) {
    let score = 0;
    // for loop with an if statement 
    // check if the position matches
    // for each match +4 
    // for each wrong match -1
    // for each blank 0
    for (let i = 0; i < array1.length; i++) {
       if (array2[i] == '') { 
       continue   
    } else if (array2[i] == array1[i]) {
        score += 4
    } else  {
        score -= 1
    }
  }
  if (score < 0) {
      return 0
  }
    return score;
   }