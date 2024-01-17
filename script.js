function findMissingNumber(nums) {
    const n = nums.length;

    const rangeArray = Array.from({ length: n + 1 }, (_, index) => index);

    for (let num of nums) {
        const indexToRemove = rangeArray.indexOf(num);
        if (indexToRemove !== -1) {
            rangeArray.splice(indexToRemove, 1);
        }
    }

    return rangeArray[0];
}

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(findMissingNumber(nums)); // It should print 8, which is the missing value from the range.

