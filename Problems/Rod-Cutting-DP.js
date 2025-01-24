

const rodCuttingDP = (prices, n) => {
    const dp = Array(n + 1).fill(0); 
    const cuts = Array(n + 1).fill(0);

    for (let i = 1; i <= n; i++) {
        let max = -Infinity;
        for (let j = 1; j <= i; j++) {
            if (prices[j - 1] + dp[i - j] > max) {
                max = prices[j - 1] + dp[i - j];
                cuts[i] = j; 
            }
        }
        dp[i] = max;
    }

    const resultCuts = [];
    let length = n;
    while (length > 0) {
        resultCuts.push(cuts[length]);
        length -= cuts[length];
    }

    return { maxProfit: dp[n], cuts: resultCuts };
}

const price = [2, 5, 7, 8];
const n = 4;

const result = rodCuttingDP(price, n);
console.log(`Maximum profit: ${result.maxProfit}`);
console.log(`Optimal cuts: ${result.cuts}`);
