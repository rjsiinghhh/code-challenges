
function multiTable(num) {
let result = '';
let i =1;

while(i> 0 && i<=10) {
    // console.log(`answer = ${i} * ${num}`);
    let answer = i * num
    result += i + ' *' + num + '=' + answer + '\n'
i++
}
return result
}

console.log(multiTable(5));



