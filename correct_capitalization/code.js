
function isUpperCase(letter) {
    return letter == letter.toUpperCase()
}

function solution(word) {
    let aux = word[0];
    for (let i = 0; i < word.length; i++) {
        let character = word[i];
        if (!isUpperCase(aux) && isUpperCase(character)) {
            return false
        } else {
            aux = character;
            continue;
        }
    }
    return true;
}

console.log(solution("USA"))
console.log(solution("Calvin"))
console.log(solution("compUter"))
console.log(solution("coding"))