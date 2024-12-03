

const findMinMax = nums => {
    if (nums.length === 0) {
        return { min: null, max: null };
    }

    let min = nums[0];
    let max = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]
        }
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return { min, max };
}

const numbersArray = [3, 7, 1, 9, -5, 10, 0];
const result = findMinMax(numbersArray);
console.log(`Smallest number is ${result.min}`);
console.log(`Largest number is ${result.max}`);