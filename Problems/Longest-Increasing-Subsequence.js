

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

console.log("Length of LIS:", result.length);
console.log("LIS:", result.subsequence);