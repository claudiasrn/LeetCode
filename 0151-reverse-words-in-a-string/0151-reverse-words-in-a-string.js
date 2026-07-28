/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    let words = s.split(" ");
    words = words.filter((word) => word !== "");
    let start = 0;
    let end = words.length - 1;

    while (start < end) {
        [words[start], words[end]] =  [words[end], words[start]]
        start++;
        end--;
    }

    return words.join(" ");
};