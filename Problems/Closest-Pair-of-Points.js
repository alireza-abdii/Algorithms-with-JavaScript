

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
    points.sort((a, b) => a.x - b.x);

    const closestUtil = (px) => {
        const n = px.length;

        if (n <= 3) {
            return bruteForceClosest(px);
        }

        const mid = Math.floor(n / 2);
        const midPoint = px[mid];

        const leftPart = px.slice(0, mid);
        const rightPart = px.slice(mid);

        const leftResult = closestUtil(leftPart);
        const rightResult = closestUtil(rightPart);

        let minDist = Math.min(leftResult.minDist, rightResult.minDist);
        let closestPair = leftResult.minDist < rightResult.minDist ? leftResult.closestPair : rightResult.closestPair;

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