

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

