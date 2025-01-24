

const matrixChainOrder = (matrices) => {
    const dims = matrices.map((matrix) => matrix[0]);
    dims.push(matrices[matrices.length - 1][1]);
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

    const buildParentheses = (i, j) => {
        if (i === j) return `A${i + 1}`;
        const k = s[i][j];
        const left = buildParentheses(i, k);
        const right = buildParentheses(k + 1, j);
        return `(${left} * ${right})`;
    };

    return { minCost: m[0][n - 1], parentheses: buildParentheses(0, n - 1) };
}

const matrices = [
    [10, 20],
    [20, 30],
    [30, 40],
    [40, 30]
];

const result = matrixChainOrder(matrices);

console.log("Minimum Cost:", result.minCost);
console.log("Optimal Parenthesization:", result.parentheses);
