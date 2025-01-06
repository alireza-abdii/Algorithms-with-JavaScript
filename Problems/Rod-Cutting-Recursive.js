

const rodCuttingRecursive = (prices, n, memo = {}) => {
    if (n === 0) return 0;

    if (memo[n]) return memo[n];

    let max = -Infinity;
    for (let i = 1; i <= n; i++) {
        max = Math.max(max, prices[i - 1] + rodCuttingRecursive(prices, n - i, memo));
    }

    memo[n] = max;

    return memo[n];
}

const price = [2, 5, 7, 8];
const n = 4;

console.log(`Maximum profit (Recursive): ${rodCuttingRecursive(price, n)}`);