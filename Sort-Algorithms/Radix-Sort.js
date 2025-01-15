

const getMax = arr => {
    return Math.max(...arr);
}

const countingSortByDigit = (arr, place) => {
    const n = arr.length;
    const output = Array(n).fill(0);
    const count = Array(10).fill(0);

    // شمارش تعداد عناصر بر اساس رقم مشخص
    for (let i = 0; i < n; i++) {
        const digit = Math.floor(arr[i] / place) % 10;
        count[digit]++;
    }

    // به‌روزرسانی شمارش برای ایجاد آرایه انباشتی
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // ساخت آرایه خروجی بر اساس ترتیب مرتب‌شده
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / place) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // انتقال مقادیر خروجی به آرایه اصلی
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
};

const radixSort = (arr) => {

}