

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return "Not Found :(";
}

const arr = [12, 24, 34, 23, 55, 24, 23, 98, 12, 3, 7, 12, 65];

let sortedArray = arr.sort((a, b) => a - b)

console.log("Sorted Array: ", sortedArray);
console.log(binarySearch(sortedArray, 23));
