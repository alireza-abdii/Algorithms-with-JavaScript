

const binarySearch = (arr, target, low, high) => {
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

const exponentialSearch = (arr, target) => {
    const n = arr.length;

    if (arr[0] === target) return 0;

    let i = 1;
    while (i < n && arr[i] <= target) {
        i *= 2;
    }

    return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, n - 1));
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
const target = 13;

const result = exponentialSearch(sortedArray, target);

console.log(result !== -1
    ? `Element found at index: ${result}`
    : "Element not found");