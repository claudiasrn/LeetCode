/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let k = 1;
    let i = 0;
    let j = 0;

    while (j < nums.length) {
        if(nums[j++] === 0) {
            k--;
        }

        if (k < 0) {
            if (nums[i++] === 0) {
                k++;
            }
        }
    }

    return (j - i) - 1;
};