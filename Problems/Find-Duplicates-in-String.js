

const removeDuplicates = str => {
    const seen = new Set();
    let result = [];

    for (const char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
}

const input = "abacbdceffg";
console.log("Input String:", input);
console.log("String without Duplicates:", removeDuplicates(input));