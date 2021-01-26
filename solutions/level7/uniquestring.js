function solve(a,b){
    let answer = '';
    // first created an empty string to hold the answer
    for (let i = 0; i < a.length; i++) {
        // first for loop is increment the first string through the second string, 
        if(!(b.includes(a[i]))) 
        // if the letters dont match, add them to the empty string
        answer += a[i];
        // add those to the string
    }
    for(let j = 0; j < b.length; j++) {
        // second array goes through the other string to see if the letters dont match
        if(!(a.includes(b[j])))
        // if the letter dont match again, add them to the empty string
        answer += b[j];
        // add them to the string
    }
    // return the empty string from the top
    return answer;
   };