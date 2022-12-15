// solution
function solution(string) {
    // console.log(string);
    let new_string = "";

    // We only need to use a for loop going from the last index and decreasing their value
    for (let i = string.length - 1; i >= 0; --i) {
        new_string = new_string + string[i];
    }
    // console.log(new_string);
    return new_string;
}

// entries : results
let entries_results = {
    "Cat": "taC",
    "The Daily Byte": "etyB yliaD ehT",
    "civic": "civic"
}

function main() {
    return Object.keys(entries_results).map(key => {
        result = solution(key);
        return entries_results[key] === result;
    })
}

console.log(main())