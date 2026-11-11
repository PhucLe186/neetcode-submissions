class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set=new Set();

        for(var x of nums){
            if(!set.had(x)) {
                arr.add(x)
            }
            else {
                return true
            }    
        }
        return false
        
    }
}
