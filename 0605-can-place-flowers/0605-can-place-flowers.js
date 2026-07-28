/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let result = 0;

    for (let i = 0; i < flowerbed.length; i += 2) {
        if (flowerbed[i] === 1) {
            continue;
        }
        if (flowerbed[i + 1] === 1) {
            i++;
            continue;
        }
        result++;
        console.log(result)
    }

    return n <= result;
};