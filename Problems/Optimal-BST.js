

const optimalBST = (keys, p, q) => {
    const n = keys.length;

    const cost = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    const weight = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    for (let i = 0; i <= n; i++) {
        weight[i][i] = q[i];
        cost[i][i] = q[i];
    }

    for (let length = 1; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            const j = i + length;
            weight[i][j] = weight[i][j - 1] + p[j - 1] + q[j];

            let minCost = Infinity;
            for (let r = i + 1; r <= j; r++) {
                const c = cost[i][r - 1] + cost[r][j] + weight[i][j];
                minCost = Math.min(minCost, c);
            }
            cost[i][j] = minCost;
        }
    }

    return cost[0][n];
};

const keys = [1, 2, 3];
const p = [0.25, 0.2, 0.15];
const q = [0.05, 0.1, 0.15, 0.1];

const result = optimalBST(keys, p, q);
console.log(`Minimum cost of Optimal BST: ${result}`);
