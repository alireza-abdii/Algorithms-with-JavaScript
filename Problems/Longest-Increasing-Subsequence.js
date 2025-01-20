

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

    // پیدا کردن طول LIS
    const maxLength = Math.max(...dp);

    // بازسازی LIS
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