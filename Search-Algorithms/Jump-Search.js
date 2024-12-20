

const jumpSearch = (arr, target) => {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n));
    let prev = 0;

    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) return "Not found :(";
    }

    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) return "not found :(";
    }

    if (arr[prev] === target) return prev;

    return "Not found :(";
}

