

const findMaxCrossingSubarray = (arr, low, mid, high) => {
    let leftSum = -Infinity;
    let sum = 0;
    let maxLeft = mid;

    for (let i = mid; i >= low; i--) {
        sum += arr[i];
        if (sum > leftSum) {
            leftSum = sum;
            maxLeft = i;
        }
    }

    let rightSum = -Infinity;
    sum = 0;
    let maxRight = mid + 1;

    for (let j = mid + 1; j <= high; j++) {
        sum = arr[j];
        if (sum > rightSum) {
            rightSum = sum;
            maxRight = j;
        }
    }

    return { maxLeft, maxRight, sum: leftSum + rightSum };
}