

const extendedEuclid = (a, b) => {
    if (b === 0) {
        return { gcd: a, x: 1, y: 0 };
    }

    const result = extendedEuclid(b, a % b);

    const x = result.y;
    const y = result.x - Math.floor(a / b) * result.y;

    return { gcd: result.gcd, x, y };
};

const a = 123;
const b = 78;

const result = extendedEuclid(a, b);
console.log(`GCD of ${a} and ${b}: ${result.gcd}`);
console.log(`Coefficients x and y: x = ${result.x}, y = ${result.y}`);