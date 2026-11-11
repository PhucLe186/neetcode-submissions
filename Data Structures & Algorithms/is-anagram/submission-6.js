class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.leght) return false;
        
        const map={}
        for (const c of s) {
            map[c]=(map[c] || 0)+1
        }
        for (const x of t) {
            console.log("s:", s);
console.log("t:", t);
console.log("map:", map);
            if(!map[x]) {
                return false
            }
            map[x]=map[x]-1
        }
        return true
    }
}
