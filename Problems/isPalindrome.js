

const isPalindrome = str => {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split("").reverse().join("");

    return cleanedStr === reversedStr;
}

const input1 = "madam";
const input2 = "hello";
const input3 = "A man, a plan, a canal: Panama";

console.log(`Is "${input1}" a Palindrome?`, isPalindrome(input1));
console.log(`Is "${input2}" a Palindrome?`, isPalindrome(input2));
console.log(`Is "${input3}" a Palindrome?`, isPalindrome(input3));