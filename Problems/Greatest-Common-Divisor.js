

const greatestCommonDivisor = (n1, n2) => {
    let divisor = 2;
    let greatstDivisor = 1;

    if (n1 < 2 || n2 < 2) return 1;

    while (n1 >= divisor && b >= divisor){
        if(n1 % divisor == 0 && b% divisor == 0){
            greatstDivisor = divisor;
        }
        divisor++;
    }

    return greatstDivisor;
}

