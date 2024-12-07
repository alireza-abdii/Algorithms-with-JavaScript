

const strassenMultiply = (A, B) => {
    const n = A.length;

    if (n === 1) {
        return [A[0][0] * B[0][0]];
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

    const M1 = strassenMultiply(addMatrices(A11, A22), addMatrices(B11, B22));
    const M2 = strassenMultiply(addMatrices(A21, A22), B11);
    const M3 = strassenMultiply(A11, subtractMatrices(B12, B22));
    const M4 = strassenMultiply(A22, subtractMatrices(B21, B11));
    const M5 = strassenMultiply(addMatrices(A11, A12), B22);
    const M6 = strassenMultiply(subtractMatrices(A21, A11), addMatrices(B11, B12));
    const M7 = strassenMultiply(subtractMatrices(A12, A22), addMatrices(B21, B22));

    const C11 = addMatrices(subtractMatrices(addMatrices(M1, M4), M5), M7);
    const C12 = addMatrices(M3, M5);
    const C21 = addMatrices(M2, M4);
    const C22 = addMatrices(subtractMatrices(addMatrices(M1, M3), M2), M6);

    return combineMatrices(C11, C12, C21, C22);
}

const addMatrices = (A, B) => {
    const n = A.length;
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[i][j] = A[i][j] - B[i][j]
        }
    }
    return result;
}

const substractMatrices = (A, B) => {
    const n = A.length;
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[i][j] = A[i][j] - B[i][j];
        }
    }
    return result;
}

const combineMatrices = (C11, C12, C21, C22) => {
    const n = C11.length;
    const result = Array.from({ length: n * 2 }, () => Array(2 * n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[i][j] = C11[i][j];
            result[i][j + n] = C12[i][j];
            result[i + n][j] = C21[i][j];
            result[i + n][j + n] = C22[i][j];

        }
    }
    return result;
}