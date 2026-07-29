/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let s = chars[0];
    let previous = chars[0];
    let counter = 1;
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === previous) {
            counter++;
            continue;
        }
        if (counter > 1) {
            s += counter;
            counter = 1;
        }
        previous = chars[i];
        s += chars[i]; 
    }

    if (counter > 1) {
        s += counter;
    }

    while(chars.length > 0) {
        chars.pop();
    }

    for(let i = 0; i < s.length; i++) {
        chars[i] = s.charAt(i);
    }
};