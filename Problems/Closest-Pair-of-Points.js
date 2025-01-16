

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