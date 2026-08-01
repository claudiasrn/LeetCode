/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let i = 0
    let j = nums.length - 1
    let counter = 0;
    nums = nums.sort((a, b) => a - b);

    while ( nums[j] > k ) {
        j--;
    }

    while (i < j) {
        if (nums[i] + nums[j] === k) {
            counter++;
            j--;
            i++;
            continue;
        }

        if (nums[i] + nums[j] > k) {
            j--;
        }

        if (nums[i] + nums[j] < k) {
            i++;
        }
    }

    return counter;
};