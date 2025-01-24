

const rodCuttingDP = (prices, n) => {
    const dp = Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        let max = -Infinity;
        for (let j = 1; j <= i; j++) {
            max = Math.max(max, prices[j - 1] + dp[i - j]);
        }
        dp[i] = max;
    }

    return dp[n];
}

const price = [2, 5, 7, 8];
const n = 4;

console.log(`Maximum profit: ${rodCuttingDP(price, n)}`);