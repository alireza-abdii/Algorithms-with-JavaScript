
const bubbleSort = arr => {
    let n = arr.length - 1;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return arr;
}

const arr = [12, 24, 34, 23, 55, 24, 23, 98, 12, 3, 7, 12, 65];

console.log(bubbleSort(arr));
