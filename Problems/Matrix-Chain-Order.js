

const matrixChainOrder = (dims) => {
    const n = dims.length - 1;
    const m = Array.from({ length: n }, () => Array(n).fill(0));
    const s = Array.from({ length: n }, () => Array(n).fill(0));

    for (let l = 2; l <= n; l++) {
        for (let i = 0; i <= n - l; i++) {
            const j = i + l - 1;
            m[i][j] = Infinity;

            for (let k = i; k < j; k++) {
                const cost = m[i][k] + m[k + 1][j] + dims[i] * dims[k + 1] * dims[j + 1];
                if (cost < m[i][j]) {
                    m[i][j] = cost;
                    s[i][j] = k;
                }
            }
        }
    }

    return { minCost: m[0][n - 1], splits: s };
}