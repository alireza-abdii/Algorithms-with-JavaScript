

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

const findMaximumSubarray = (arr, low, high) => {
    if (low === high) {
        return { maxLeft: low, maxRight: high, sum: arr[low] }
    } else {
        const mid = Math.floor((low + high) / 2);

        const leftResult = findMaxCrossingSubarray(arr,low,mid);
        const rightResult = findMaxCrossingSubarray(arr, mid+1,high);
        const crossResult = findMaxCrossingSubarray(arr,low, mid,high);

        if(leftResult.sum >= rightResult.sum && leftResult.sum >= crossResult.sum){
            return leftResult;
        } else if (rightResult.sum >= leftResult.sum && rightResult.sum >= crossResult.sum) {
            return rightResult;
        } else {
            return crossResult;
        }
    }
}

