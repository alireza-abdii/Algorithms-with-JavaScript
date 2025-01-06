

const rodCuttingRecursive = (prices, n, memo = {}) => {
    if (n === 0) return 0;

    if (memo[n]) return memo[n];

    let max = -Infinity;
    for (let i = 1; i <= n; i++) {
        max = Math.max(max, prices[i - 1] + rodCuttingRecursive(prices, n - 1, memo));
    }

    memo[n] = max;

    return max;
}