const { string } = require("yargs");

function problem(x) {
    // variable to hold value, multplied by 50 and increased by 6 
    if typeof x == 'string'{
        return 'Error'
    } else {
        return x * 50 + 6
    }
}