function solution(movements) {
    let x = 0, y = 0;
    for (let i = 0; i < movements.length; i++) {
        if ("L" === movements[i]) {
            x -= 1;
        } else if ("R" === movements[i]) {
            x += 1;
        } else if ("U" === movements[i]) {
            y -= 1;
        } else if ("D" === movements[i]) {
            y += 1;
        }
    }
    return x === 0 && y === 0;
}


console.log(solution("LR"))
console.log(solution("URURD"))
console.log(solution("RUULLDRD"))