

const knapsack = (weights, values, capacity) => {
    const n = weights.length;
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    // پر کردن جدول dp
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]], // شامل کردن آیتم i
                    dp[i - 1][w] // شامل نکردن آیتم i
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    // بازسازی جواب
    let w = capacity;
    const selectedItems = [];
    for (let i = n; i > 0 && w > 0; i--) {
        if (dp[i][w] !== dp[i - 1][w]) {
            selectedItems.push(i - 1);
            w -= weights[i - 1];
        }
    }

    return {
        maxValue: dp[n][capacity],
        selectedItems
    };
}