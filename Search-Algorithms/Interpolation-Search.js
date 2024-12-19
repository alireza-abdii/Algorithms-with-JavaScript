

const interpolationSearch = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        const pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        if (arr[pos] === target) return pos;
        if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return "Not found :(";
}

const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;

const result = interpolationSearch(sortedArray, target);
console.log(result !== "Not found :("
    ? `Target found at index: ${result}`
    : "Target not found");