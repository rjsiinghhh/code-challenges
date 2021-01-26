function solve(a,b){
    let number = [];
    // created an empty array to store the answer

    for(let i=0; i< b.length; i++){
        // this for loop is for the second array, to see what is in it 
        let x = 0;
        // this variable the counter to 0
        for(let j = 0; j < a.length; j++) {
            // this second array is nested inside the first to check and match the strings inside the array
           if (b[i] == a[j])
           // this says if whats counted in b matches a, the give 1 for that specific position.
            x += 1
        }
        number.push(x) 
        // this pushes the answers into that empty array created at the start of the function
    }

    return number;
  }


