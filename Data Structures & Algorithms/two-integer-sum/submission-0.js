class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map={};
        const length=nums.length;
        for(var i=0; i<length; i++ ) {
            const y= target-nums[i];
            if(map[y]) {
                return [i,map[y]]
            }
            map[nums[i]]=i
        }
        return [-1,-1]
    }
}
