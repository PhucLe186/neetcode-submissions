class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const arr=[];

        for(var x of nums){
            if(!arr.includes(x)) {
                arr.push(x)
            }
            else {
                return true
            }    
        }
        return false
        
    }
}
