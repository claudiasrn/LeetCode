/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let index = height.length - 1;

    for (let i = 0; i < height.length; i++) {
        if ((index - i) * Math.min(height[i], height[index]) > max) {
            max = (index - i) * Math.min(height[i], height[index])
        }

        if (height[i] >= height[index]) {
            i--;
            index--;
        }
    }

    return max;
};