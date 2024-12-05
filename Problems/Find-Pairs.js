

const findPairs = (arr, target) => {
    const seen = new Set();
    const pairs = [];

    for (const num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }

    return pairs;
}

const numbersArray = [2, 7, 11, 15, -2, 3, 6, 4];
console.log("Pairs: ", findPairs(numbersArray, 9));