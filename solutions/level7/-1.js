function solution(string, limit) {
    let answer = '';

    // count the letters in the string
    if (limit >= string.length) {
        return string;
    } else {
        for (let i = 0; i < string.length; i++) {
            if (limit == i)
                break;
            answer += string[i]
        }
    }
    return answer + '...';

}