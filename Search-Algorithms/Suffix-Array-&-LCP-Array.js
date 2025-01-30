

const buildSuffixArray = (s) => {
    const n = s.length;
    const suffixes = Array.from({ length: n }, (_, i) => s.slice(i)).map((suffix, index) => ({ index, suffix }));

    // مرتب‌سازی پسوندها
    suffixes.sort((a, b) => a.suffix.localeCompare(b.suffix));

    // ساخت Suffix Array
    return suffixes.map(suffix => suffix.index);
};