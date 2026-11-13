class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map={}
        for( let x of nums ) {
            map[x]=(map[x]|0)+1
        }
        const rs= Object.entries(map)
        .sort((a,b)=>b[1]-a[1])
        .slice(0,k)
        .map(x=>Number(x[0]))
        console.log(rs)

        return rs
    }
}
