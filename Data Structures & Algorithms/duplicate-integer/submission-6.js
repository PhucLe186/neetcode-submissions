class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set=new Set();

        for(var x of nums){
            if(set.had(x)) {
               return true
            }
            set.add(x)
        }
        return false
        
    }
}
