

const euclideanDistance = (p1, p2) => {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
};

const bruteForceClosest = (points) => {
    let minDist = Infinity;
    let closestPair = null;

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const dist = euclideanDistance(points[i], points[j]);
            if (dist < minDist) {
                minDist = dist;
                closestPair = [points[i], points[j]];
            }
        }
    }

    return { minDist, closestPair };
};

const closestPairDivideAndConquer = (points) => {
    // مرتب‌سازی نقاط بر اساس مختصات x
    points.sort((a, b) => a.x - b.x);

    const closestUtil = (px) => {
        const n = px.length;

        // اگر تعداد نقاط کوچک باشد، از brute-force استفاده کنید
        if (n <= 3) {
            return bruteForceClosest(px);
        }

        const mid = Math.floor(n / 2);
        const midPoint = px[mid];

        // تقسیم نقاط به دو نیمه
        const leftPart = px.slice(0, mid);
        const rightPart = px.slice(mid);

        // نزدیک‌ترین نقاط در نیمه‌های چپ و راست
        const leftResult = closestUtil(leftPart);
        const rightResult = closestUtil(rightPart);

        // حداقل فاصله بین نقاط در نیمه‌های چپ و راست
        let minDist = Math.min(leftResult.minDist, rightResult.minDist);
        let closestPair = leftResult.minDist < rightResult.minDist ? leftResult.closestPair : rightResult.closestPair;

        // بررسی نقاط در نوار مرزی
        const strip = px.filter(point => Math.abs(point.x - midPoint.x) < minDist);

        for (let i = 0; i < strip.length; i++) {
            for (let j = i + 1; j < strip.length && (strip[j].y - strip[i].y) < minDist; j++) {
                const dist = euclideanDistance(strip[i], strip[j]);
                if (dist < minDist) {
                    minDist = dist;
                    closestPair = [strip[i], strip[j]];
                }
            }
        }

        return { minDist, closestPair };
    };

    return closestUtil(points);
};