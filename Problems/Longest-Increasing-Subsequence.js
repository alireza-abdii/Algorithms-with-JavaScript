

// Dynamic Programming method

const LIS_DP = (arr) => {
    const n = arr.length;
    const dp = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    const maxLength = Math.max(...dp);

    const lis = [];
    let currentLength = maxLength;
    for (let i = n - 1; i >= 0; i--) {
        if (dp[i] === currentLength) {
            lis.unshift(arr[i]);
            currentLength--;
        }
    }

    return { length: maxLength, subsequence: lis };
};

const arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
const result = LIS_DP(arr);

console.log("Dynamic Programming Method:");
console.log("Length of LIS:", result.length);
console.log("LIS:", result.subsequence);

// Binary Search method

const LIS_BinarySearch = (arr) => {
    const n = arr.length;
    const tails = [];
    const indices = Array(n).fill(-1);
    const prevIndices = Array(n).fill(-1);

    for (let i = 0; i < n; i++) {
        let low = 0, high = tails.length;

        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (tails[mid] < arr[i]) low = mid + 1;
            else high = mid;
        }

        if (low < tails.length) {
            tails[low] = arr[i];
            indices[low] = i;
        } else {
            tails.push(arr[i]);
            indices[low] = i;
        }

        if (low > 0) {
            prevIndices[i] = indices[low - 1];
        }
    }

    const lis = [];
    let currentIndex = indices[tails.length - 1];
    while (currentIndex !== -1) {
        lis.unshift(arr[currentIndex]);
        currentIndex = prevIndices[currentIndex];
    }

    return { length: tails.length, subsequence: lis };
};

const arr2 = [10, 22, 9, 33, 21, 50, 41, 60, 80];
const result2 = LIS_BinarySearch(arr2);

console.log("Binary Search Method:");
console.log("Length of LIS:", result2.length);
console.log("LIS:", result2.subsequence);