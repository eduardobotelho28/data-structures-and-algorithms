/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    const hash_map = {}
    let i

    for (i = 0; i < s.length; i++) {

        if(!(s[i] in hash_map)) {
            hash_map[s[i]] = [i,1]
        }

        else {
            hash_map[s[i]][1] += 1
        }
       
    }

    for (let char in hash_map) {
        if(hash_map[char][1] == 1)
            return hash_map[char][0]
    }

    return -1

};