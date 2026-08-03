/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = 0;

    for (let i = 0; i < k; i++) {
        if(s.charCodeAt(i) === 97 || 
        s.charCodeAt(i) === 101 ||
        s.charCodeAt(i) === 105 ||
        s.charCodeAt(i) === 111 ||
        s.charCodeAt(i) === 117) {
            vowels++;
        }
    }

    let maxVowels = vowels;

    for (let i = k; i < s.length; i++) {
         if(s.charCodeAt(i - k) === 97 || 
        s.charCodeAt(i - k) === 101 ||
        s.charCodeAt(i - k) === 105 ||
        s.charCodeAt(i - k) === 111 ||
        s.charCodeAt(i - k) === 117) {
            vowels--;
        }

        if(s.charCodeAt(i) === 97 || 
        s.charCodeAt(i) === 101 ||
        s.charCodeAt(i) === 105 ||
        s.charCodeAt(i) === 111 ||
        s.charCodeAt(i) === 117) {
            vowels++;
        }

        maxVowels = Math.max(maxVowels, vowels);
    }

    return maxVowels;
};