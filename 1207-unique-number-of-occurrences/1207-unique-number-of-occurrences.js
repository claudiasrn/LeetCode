/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(String(arr[i]))) {
            value = map.get(String(arr[i])) + 1;
            map.set(String(arr[i]), value);
            continue;
        }

        map.set(String(arr[i]), 1);
    }

    const values = [...map.values()];
    return new Set(values).size === values.length;
};