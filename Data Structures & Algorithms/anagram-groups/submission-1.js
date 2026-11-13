class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const arr={}
        for (var s of strs) {
            const x = s.split('').sort().join('')
            if(arr[x] !== undefined) {
                arr[x].push(s)
            }else{
                arr[x]=[s]
            }
                
        }
        return Object.values(arr)
    }
}
