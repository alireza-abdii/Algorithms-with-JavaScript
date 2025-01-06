

const matrixMultiply = (a, b) => {
    const rowsA = a.length;
    const colsA = a[0].length;
    const rowsB = b.length;
    const colsB = b[0].length;

    if (colsA !== rowsB) {
        throw new Error("Matrix dimensions do not allow multiplication.");
    }

    const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    return result;
}

const A = [
    [1, 2],
    [3, 4],
    [5, 6]
];

const B = [
    [7, 8, 9],
    [10, 11, 12]
];

console.log("Result of Matrix Multiplication:");
console.table(matrixMultiply(A, B));