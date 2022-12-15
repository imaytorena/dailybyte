function main() {
    return Object.keys(entries_results).map(key => {
        result = solution(key);
        return entries_results[key] === result;
    })
}

// console.log(main())