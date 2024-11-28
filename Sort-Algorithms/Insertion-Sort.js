

const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (arr[j] > key && j >= 0) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
    return arr;
}

const arr = [12, 24, 34, 23, 55, 24, 23, 98, 12, 3, 7, 12, 65];

console.log(insertionSort(arr));
