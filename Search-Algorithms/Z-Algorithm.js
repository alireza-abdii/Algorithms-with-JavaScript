

const buildZArray = (s) => {
    const n = s.length;
    const z = Array(n).fill(0);
    let left = 0, right = 0;

    for (let i = 1; i < n; i++) {
        if (i <= right) {
            z[i] = Math.min(right - i + 1, z[i - left]);
        }
        while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
            z[i]++;
        }
        if (i + z[i] - 1 > right) {
            left = i;
            right = i + z[i] - 1;
        }
    }

    return z;
};

const zAlgorithm = (text, pattern) => {
    const concat = pattern + "$" + text;
    const z = buildZArray(concat);
    const result = [];
    const patternLength = pattern.length;

    for (let i = patternLength + 1; i < z.length; i++) {
        if (z[i] === patternLength) {
            result.push(i - patternLength - 1); // شاخص شروع تطابق
        }
    }

    return result;
};