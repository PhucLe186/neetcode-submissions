class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res=0;
        const Store = new Set(nums);

        for(let num of nums) {
            let streak=0,
            curr = num;
            

            while(Store.has(curr)) {
                streak++;
                curr++
            }
            res=Math.max(res,streak)
        }
        return res
    }
}
