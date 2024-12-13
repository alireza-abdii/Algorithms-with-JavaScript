

const fibonacci = n => {
    if (n <= 1) return n;

    const dp = Array(n + 1).fill(0);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

console.log("Fibonacci(10):", fibonacci(10));