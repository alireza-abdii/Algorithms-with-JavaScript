

const buildSuffixArray = (s) => {
    const n = s.length;
    const suffixes = Array.from({ length: n }, (_, i) => s.slice(i)).map((suffix, index) => ({ index, suffix }));

    // مرتب‌سازی پسوندها
    suffixes.sort((a, b) => a.suffix.localeCompare(b.suffix));

    // ساخت Suffix Array
    return suffixes.map(suffix => suffix.index);
};

const buildLCPArray = (s, suffixArray) => {
    const n = s.length;
    const rank = Array(n).fill(0);
    const lcp = Array(n).fill(0);

    // ایجاد رتبه‌ها برای هر ایندکس
    for (let i = 0; i < n; i++) {
        rank[suffixArray[i]] = i;
    }

    let k = 0; // طول LCP فعلی
    for (let i = 0; i < n; i++) {
        if (rank[i] === n - 1) {
            k = 0;
            continue;
        }

        let j = suffixArray[rank[i] + 1];

        while (i + k < n && j + k < n && s[i + k] === s[j + k]) {
            k++;
        }

        lcp[rank[i]] = k;

        if (k > 0) {
            k--;
        }
    }

    return lcp;
};