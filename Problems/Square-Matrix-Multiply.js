

const squareMatrixMultiply = (A, B) => {
    const n = A.length;
    const result = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[i][j] += A[i][j] * B[i][j];
        }
    }
    return result;
}

const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const B = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

const result = squareMatrixMultiply(A, B);
console.log("Result:");
console.table(result);
