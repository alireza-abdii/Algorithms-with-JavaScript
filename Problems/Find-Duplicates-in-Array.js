

const findDuplicates = arr => {
    const counts = {};
    const duplicates = [];

    arr.forEach(el => {
        counts[el] = (counts[el] || 0) + 1;
    });

    for (let [key, value] of Object.entries(counts)) {
        if (value > 1) {
            duplicates.push({ element: key, count: value });
        }
    }

    const uniqueArray = Object.keys(counts);

    return { duplicates, uniqueArray };
}

const stringArray = ["apple", "banana", "apple", "orange", "banana", "grape", "apple"];
const numberArray = [1, 2, 3, 2, 4, 5, 6, 3, 3, 7, 8, 8];
const stringResult = findDuplicates(stringArray);
const numberResult = findDuplicates(numberArray);

console.log("Duplicates Strings:", stringResult.duplicates);
console.log("Array without duplicates strings:", stringResult.uniqueArray);
console.log("Duplicates Numbers:", numberResult.duplicates);
console.log("Array without duplicates numbers:", numberResult.uniqueArray);