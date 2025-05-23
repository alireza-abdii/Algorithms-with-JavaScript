

const ternarySearch = (arr, target, low, high) => {
    if (low > high) return "Not found :(";

    const mid1 = low + Math.floor((high - low) / 3);
    const mid2 = high - Math.floor((high - low) / 3);

    if (arr[mid1] === target) return mid1;
    if (arr[mid2] === target) return mid2;

    if (target < arr[mid1]) {
        return ternarySearch(arr, target, low, mid1 - 1);
    } else if (target > arr[mid2]) {
        return ternarySearch(arr, target, mid2 + 1, high);
    } else {
        return ternarySearch(arr, target, mid1 + 1, mid2 - 1);
    }
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 13;

const result = ternarySearch(sortedArray, target, 0, sortedArray.length - 1);
console.log(
    result !== -1
        ? `Target found at index: ${result}`
        : "Target not found"
);