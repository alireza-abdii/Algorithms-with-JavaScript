

const greatestCommonDivisor = (n1, n2) => {
    let divisor = 2;
    let greatstDivisor = 1;

    if (n1 < 2 || n2 < 2) return 1;

    while (n1 >= divisor && n2 >= divisor) {
        if (n1 % divisor == 0 && n2 % divisor == 0) {
            greatstDivisor = divisor;
        }
        divisor++;
    }

    return greatstDivisor;
}

console.log(greatestCommonDivisor(14, 21));

console.log(greatestCommonDivisor(69, 169));