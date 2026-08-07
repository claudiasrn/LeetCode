/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let rightSum = 0;
    let leftSum = 0;
    let pivotIndex = -1;

    for (let i = 0; i < nums.length - 1; i++) {
        leftSum += nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (rightSum === leftSum) {
            pivotIndex = i;
        }

        rightSum += nums[i];
        leftSum -= nums[i - 1]; 
    }

    return pivotIndex;
};