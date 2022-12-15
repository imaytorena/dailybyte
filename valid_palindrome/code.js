// my solution
function isPalindrome(phrase) {
    let cleaned_phrase = "";
    for (let i = 0; i < phrase.length; i++) {
        let ascii = phrase.charCodeAt(i)
        if (ascii >= 97 && ascii <= 122) {
            cleaned_phrase = cleaned_phrase + String.fromCharCode(ascii);
        } else if (ascii >= 65 && ascii <= 90) {
            // rest 32
            cleaned_phrase = cleaned_phrase + String.fromCharCode(ascii + 32);
        }
    }

    let copy_phrase = "";
    for (let i = cleaned_phrase.length -1; i >= 0; i--) {
        copy_phrase = copy_phrase + cleaned_phrase[i];
        // console.log(cleaned_phrase[i])
    }

    console.log(cleaned_phrase, copy_phrase)
    return cleaned_phrase === copy_phrase
}

// entries : results
const entries_results = {
    "level": true,
    "algorithm": false,
    "A man, a plan, a canal: Panama.": true,
}

// run function
function main() {
    return Object.keys(entries_results).map(key => {
        result = isPalindrome(key);
        return entries_results[key] === result;
    })
}

console.log(main())