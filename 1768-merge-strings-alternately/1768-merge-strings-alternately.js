/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let finalWord = "";
    let index = 0;

    while (index < word1.length && index < word2.length) {
        finalWord +=  word1.charAt(index);
        finalWord += word2.charAt(index);
        index++;
    }

    if (word1.length > word2.length) {
        while (index < word1.length) {
            finalWord += word1.charAt(index);
            index++;
        }
    } else {
        while (index < word2.length) {
            finalWord += word2.charAt(index);
            index++;
        }
    }

    return finalWord;
};