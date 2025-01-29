

const rabinKarp = const rabinKarp = (text, pattern, prime = 101) => {
    const d = 256; // تعداد کاراکترهای ممکن (در حالت عمومی 256 برای ASCII)
    const n = text.length;
    const m = pattern.length;
    let pHash = 0; // مقدار هش الگو
    let tHash = 0; // مقدار هش برای بخش متنی
    let h = 1;
    const result = [];

    // مقدار h = (d^(m-1)) % prime را محاسبه می‌کنیم
    for (let i = 0; i < m - 1; i++) {
        h = (h * d) % prime;
    }

    // مقدار هش اولیه برای الگو و اولین پنجره در متن
    for (let i = 0; i < m; i++) {
        pHash = (d * pHash + pattern.charCodeAt(i)) % prime;
        tHash = (d * tHash + text.charCodeAt(i)) % prime;
    }

    // اسکن متن برای یافتن الگو
    for (let i = 0; i <= n - m; i++) {
        // اگر مقدار هش برابر بود، بررسی دقیق‌تر انجام می‌دهیم
        if (pHash === tHash) {
            let match = true;
            for (let j = 0; j < m; j++) {
                if (text[i + j] !== pattern[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                result.push(i); // شاخص شروع تطابق را ذخیره می‌کنیم
            }
        }

        // مقدار هش برای پنجره بعدی را محاسبه می‌کنیم (Rolling Hash)
        if (i < n - m) {
            tHash = (d * (tHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % prime;

            // اگر مقدار هش منفی شد، مقدار مثبت معادل آن را می‌گیریم
            if (tHash < 0) {
                tHash += prime;
            }
        }
    }

    return result;
};