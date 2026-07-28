/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = "aeiouAEIOU";
    const chars = s.split("");

    let l = 0, r = chars.length - 1;

    while(l < r) {
        while(l < r && !vowels.includes(chars[l])) l++;

        while(l < r && !vowels.includes(chars[r])) r--;

        [chars[l], chars[r]] = [chars[r], chars[l]];
        l++;
        r--;
    }

    return chars.join("");
};