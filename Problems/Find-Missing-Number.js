

const findMissingNum = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            return arr[i] + 1;
        }
    }
    return "No Missing Number :)";
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
console.log(findMissingNum(arr));
