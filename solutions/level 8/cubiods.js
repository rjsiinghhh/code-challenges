function findDifference(a, b) {
    let volumeA = 1; 
    // give 'a' a value
    let volumeB = 1; 
    // gives 'b' a value
    for(let i = 0; i < a.length; i++) {
        // counts what the array
        volumeA *= a[i];
        // this mulitplies 'a' array and places it into 'volumeA'
        volumeB *= b[i];
        // this mulitplies 'b' array and places it into 'volumeB'
    }
    if (volumeA > volumeB){
        // if volumeA is greater than volumeB subtract it
        volumeA -= volumeB;
        return volumeA;
        // and return the positive number
    } else {
      volumeB -= volumeA;
      // otherwise if volumeB is greater, subtract volumeA from and 
      return volumeB;
      // return the positive number
    }
  
    // first step is multiply whats inside each array
    // hold the seperate values and subtract the greater from the smaller
  }