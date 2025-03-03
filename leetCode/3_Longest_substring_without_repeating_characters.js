/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    //edge case  
    if(s.length == 0)
        return 0
    
    let l   = 0
    let r   = 0
    let max = 1
    const counter = {}

    counter[s[0]] = 1 

    while ( r < s.length - 1) {

        r++

        counter[s[r]] = counter[s[r]] ? counter[s[r]] += 1 : counter[s[r]] = 1

        while (counter[s[r]] == 2) {
            counter[s[l]]-=1
            l++
        }

        max = max >= r - l + 1 ? max : r - l + 1 

    }

    return max

};
