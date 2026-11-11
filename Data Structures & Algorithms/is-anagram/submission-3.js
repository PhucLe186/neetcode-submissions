class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
         if(s.length !== t.leght) return 0;
        
        const map={}
        for (const c of s) {
            map[c]=(map[c] || 0)+1
        }
        for (const x of t) {
            if(!map[x]) {
                return false
            }
            map[x]=map[x]-1
        }
        return true
    }
}
