class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        console.log(nums)
        const n= nums.length;
        const result=new Array(n).fill(1);

        let pref=1;
        let suff=1;
        for(let i=0; i<n; i++) {
            result[i]=pref
            pref*=nums[i]
        }
        for( let i=n-1; i>=0; i--) {
            result[i]*=suff
            suff*=nums[i]
        }
        return result
    }
}
