

const findMissingNum = arr => {
    const n = arr.length + 1;
    const totalSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    const missingNum = totalSum - actualSum;

    const sortedArr = [...arr].sort((a, b) => a - b);
    let missingIndex = sortedArr.findIndex((num, index) => num > missingNum);
    if (missingIndex === -1) missingIndex = arr.length;

    return { missingNum, missingIndex };
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
const result = findMissingNum(arr);
console.log(`Missing number: ${result.missingNum}, Missing index: ${result.missingIndex}`);