

const extendedEuclid = (a, b) => {
    if (b === 0) {
        return { gcd: a, x: 1, y: 0 };
    }

    const result = extendedEuclid(b, a % b);

    const x = result.y;
    const y = result.x - Math.floor(a / b) * result.y;

    return { gcd: result.gcd, x, y };
};