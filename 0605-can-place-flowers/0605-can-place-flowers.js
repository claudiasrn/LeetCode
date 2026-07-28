/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let result = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) {
            i++;
            continue;
        }
        if (flowerbed[i + 1] === 1) {
            i += 2;
            continue;
        }
        result++;
        i++;
        console.log(result)
    }

    return n <= result;
};