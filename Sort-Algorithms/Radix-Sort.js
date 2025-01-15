

const getMax = arr => {
    return Math.max(...arr);
}

const countingSortByDigit = (arr, place) => {
    const n = arr.length;
    const output = Array(n).fill(0);
    const count = Array(10).fill(0);

    for (let i = 0; i < n; i++) {
        const digit = Math.floor(arr[i] / place) % 10;
        count[digit]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / place) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
};

const radixSort = (arr) => {
    const max = getMax(arr);
    let place = 1;

    while (Math.floor(max / place) > 0) {
        countingSortByDigit(arr, place);
        place *= 10;
    }

    return arr;
};

const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Original Array:", arr);

const sortedArray = radixSort(arr);
console.log("Sorted Array:", sortedArray);