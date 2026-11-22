class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map=[]
        for(let c of s) {
            const top=map.pop();
            if(
                top==="[" && c!==']' || 
                top==="{" && c!=='}' || 
                top==="(" && c!==')') {
                    return false
                }
        }
        return true
    }
}
