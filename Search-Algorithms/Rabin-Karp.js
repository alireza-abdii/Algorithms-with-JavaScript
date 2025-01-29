

const rabinKarp = (text, pattern, prime = 101) => {
    const d = 256; 
    const n = text.length;
    const m = pattern.length;
    let pHash = 0; 
    let tHash = 0; 
    let h = 1;
    const result = [];

    for (let i = 0; i < m - 1; i++) {
        h = (h * d) % prime;
    }

    for (let i = 0; i < m; i++) {
        pHash = (d * pHash + pattern.charCodeAt(i)) % prime;
        tHash = (d * tHash + text.charCodeAt(i)) % prime;
    }

    for (let i = 0; i <= n - m; i++) {
        if (pHash === tHash) {
            let match = true;
            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                result.push(i); 
            }
        }

        if (i < n - m) {
            tHash = (d * (tHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;

            if (tHash < 0) {
                tHash += prime;
            }
        }
    }

    return result;
};

const text = "ababcabcabc";
const pattern = "abc";

const matches = rabinKarp(text, pattern);
console.log(`Pattern found at indices: ${matches}`);