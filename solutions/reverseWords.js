function reverseWords(str) {
let reverse = str.split(' ').reverse();
let x = reverse.join(' ');



return x
}



// other solution


function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}