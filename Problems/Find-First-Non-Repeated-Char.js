

const firstNonReapetedChar = str => {
    let n = str.length;
    let char = null;
    let count = {};

    for (let i = 0; i < n; i++) {
        char = str[i];

        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    for (const j in count) {
        if (count[j] == 1) return j;
    }
}

