

const computeLPSArray = (pattern) => {
    const m = pattern.length;
    const lps = Array(m).fill(0);
    let length = 0;
    let i = 1;

    while (i < m) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

const KMP = (text, pattern) => {
    const n = text.length;
    const m = pattern.length;

    if (m === 0) return [];

    const lps = computeLPSArray(pattern);
    const result = [];
    let i = 0;
    let j = 0;

    while (i < n) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === m) {
            result.push(i - j);
            j = lps[j - 1];
        } else if (i < n && text[i] !== pattern[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return result;
};

const text = "ababcabcabababd";
const pattern = "ababd";

const occurrences = KMP(text, pattern);

if (occurrences.length > 0) {
    console.log(`Pattern found at indices: ${occurrences.join(", ")}`);
} else {
    console.log("Pattern not found");
}