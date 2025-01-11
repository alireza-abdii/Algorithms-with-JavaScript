

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

const exponetialSearch = (arr, target) => {
    const n = arr.length;

    if (arr[0] === target) return 0;

    let i = 1;
    while (i < n && arr[i] <= target) {
        i *= 2;
    }

    return binarySearch(arr, target, Math.floor(i / 2), Math.min(i, n - 1));
}