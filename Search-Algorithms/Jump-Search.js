

const jumpSearch = (arr, target) => {
    const n = arr.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return "Not found :(";
    }

    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) return "not found :(";
    }

    if (arr[prev] === target) return prev;

    return "Not found :(";
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 13;

const result = jumpSearch(sortedArray, target);
console.log(result !== -1
    ? `Target found at index: ${result}`
    : "Target not found");