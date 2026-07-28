/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
function canPlaceFlowers(flowerbed, n) {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const leftEmpty  = i === 0 || flowerbed[i - 1] === 0;
            const rightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

            if (leftEmpty && rightEmpty) {
                flowerbed[i] = 1;   // plant the flower
                count++;
            }
        }
    }

    return count >= n;
}