/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let answer1 = new Set();
    let answer2 = new Set();
    let deleted = new Set();

    for (let i = 0; i < nums1.length; i++) {
        answer1.add(nums1[i]);
    }

    for (let i = 0; i < nums2.length; i++) {
        if (answer1.has(nums2[i])) {
            answer1.delete(nums2[i]);
            deleted.add(nums2[i])
            continue;
        }

        if (deleted.has(nums2[i])) {
            continue;
        }

        answer2.add(nums2[i]);
    }

    return [[...answer1], [...answer2]]
};