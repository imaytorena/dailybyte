function solution(a, b) {
    a_copy = [...a]
    for (let i = a.length-1; i >= 0; i--) {
        if (b.length > 0) {
            if (a[i] == "0" && b[b.length - 1]) {
                a_copy[i] = "1"
                b = b.slice(0, b.length - 1)
            }
            if (b[b.length - 1] === "0") {
                b = b.slice(0, b.length - 1)
            }
            if (a.length-1 === i && a[i] === "1" && b[b.length-1] === "1") {
                a_copy = ["1", ...a_copy]
            }
        }
    }
    return a_copy.join("")
}

console.log(solution("100", "1"))
console.log(solution("11", "1"))
console.log(solution("1", "0"))
console.log(solution("1", "1"))