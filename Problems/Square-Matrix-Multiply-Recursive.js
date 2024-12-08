const squareMatrixMultiplyRecursive = (A, B) => {
    const n = A.length;

    if (n === 1) {
        return [[A[0][0] * B[0][0]]];
    }

    const mid = Math.floor(n / 2);

    const A11 = A.slice(0, mid).map(row => row.slice(0, mid));
    const A12 = A.slice(0, mid).map(row => row.slice(mid));
    const A21 = A.slice(mid).map(row => row.slice(0, mid));
    const A22 = A.slice(mid).map(row => row.slice(mid));

    const B11 = B.slice(0, mid).map(row => row.slice(0, mid));
    const B12 = B.slice(0, mid).map(row => row.slice(mid));
    const B21 = B.slice(mid).map(row => row.slice(0, mid));
    const B22 = B.slice(mid).map(row => row.slice(mid));

    const C11 = addMatrices(
        squareMatrixMultiplyRecursive(A11, B11),
        squareMatrixMultiplyRecursive(A12, B21)
    );
    const C12 = addMatrices(
        squareMatrixMultiplyRecursive(A11, B12),
        squareMatrixMultiplyRecursive(A12, B22)
    );
    const C21 = addMatrices(
        squareMatrixMultiplyRecursive(A21, B11),
        squareMatrixMultiplyRecursive(A22, B21)
    );
    const C22 = addMatrices(
        squareMatrixMultiplyRecursive(A21, B12),
        squareMatrixMultiplyRecursive(A22, B22)
    );

    return combineMatrices(C11, C12, C21, C22);
};

const addMatrices = (A, B) => {
    const n = A.length;
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[i][j] = A[i][j] + B[i][j];
        }
    }
    return result;
};

const combineMatrices = (C11, C12, C21, C22) => {
    const n = C11.length;
    const result = Array.from({ length: 2 * n }, () => Array(2 * n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[i][j] = C11[i][j];
            result[i][j + n] = C12[i][j];
            result[i + n][j] = C21[i][j];
            result[i + n][j + n] = C22[i][j];
        }
    }
    return result;
};

const A = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

const B = [
    [16, 15, 14, 13],
    [12, 11, 10, 9],
    [8, 7, 6, 5],
    [4, 3, 2, 1]
];

console.log("Result:");
console.table(squareMatrixMultiplyRecursive(A, B));
