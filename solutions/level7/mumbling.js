function accum (s) {
    let mumble = '';
    // created an empty string to hold the answer
    for(let i = 0; i < s.length; i++) {
        // this first for loop looks at the characters inside the s string.
        for(let j = 0; j < i + 1; j++) {
            // this second for loop add one character to each value of the string
            if(j == 0) {
               mumble += s[i].toUpperCase();
               // this if and else statements says if its the first letter of the string, then capitalizes it
            }
            else {
                mumble += s[i].toLowerCase();
                // else if its not the first letter, keep it lowercase.
            }
        }
        if (i < s.length -1) {
            // this if statements says if its NOT the last letter in the string, add this '-' to the end of it.
            mumble += '-'
        }
    }
    return mumble;
}