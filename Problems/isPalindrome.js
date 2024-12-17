

const isPalindrome = str => {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedStr;
}

