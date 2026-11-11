class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        for(var c of s) {
            if(!t.includes(c)) {
                return false
            }
            return true
        }
    }
}
