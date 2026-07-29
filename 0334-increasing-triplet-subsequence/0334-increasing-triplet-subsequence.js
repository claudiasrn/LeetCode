/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstNumber = Infinity;
    let secondNumber = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > secondNumber && nums[i] > firstNumber) {
           return true;
        }

        if (nums[i] > firstNumber) {
            secondNumber = nums[i];
        } else {
            firstNumber = nums[i];
        }
    }

    return false;
};