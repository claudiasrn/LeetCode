/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vocals = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ("A")
            || s[i] == ("E") 
            || s[i] == ("I")
            || s[i] == ("O")
            || s[i] == ("U")
            || s[i] == ("a") 
            || s[i] == ("e")
            || s[i] == ("i")
            || s[i] == ("o")
            || s[i] == ("u")
            ) { 
                vocals.push(s[i]);
            }
    }

    let newS = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] == ("A")
            || s[i] == ("E") 
            || s[i] == ("I")
            || s[i] == ("O")
            || s[i] == ("U")
            || s[i] == ("a") 
            || s[i] == ("e")
            || s[i] == ("i")
            || s[i] == ("o")
            || s[i] == ("u")
            ) { 
                newS[i] = vocals.pop();
                continue;
            }

        newS[i] = s[i];
    }

    return newS.join("");
};