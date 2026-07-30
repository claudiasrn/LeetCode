/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let counter = 0;
    let numbers = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            counter++;
            continue;
        }
        numbers.push(nums[i])
    }

    for (let i = 0; i < numbers.length; i++) {
        nums[i] = numbers[i];
    }

    for (let i = numbers.length; i < nums.length; i++) {
        nums[i] = 0;
    }
};