

const extendedEuclid = (a, b) => {
    if (b === 0) {
        // پایه: وقتی b صفر است
        return { gcd: a, x: 1, y: 0 };
    }

    // فراخوانی بازگشتی
    const result = extendedEuclid(b, a % b);

    // ضرایب x و y را به‌روز می‌کنیم
    const x = result.y;
    const y = result.x - Math.floor(a / b) * result.y;

    return { gcd: result.gcd, x, y };
};