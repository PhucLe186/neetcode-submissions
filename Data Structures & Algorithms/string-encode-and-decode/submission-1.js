class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const size=[]
        const arr=[]
        if(strs.length===0) return ""
        for(let str of strs) {
            size.push(str.length)
        }
        for (let sz of size) {
            arr.push(String(sz), ',')
        }

        arr.push('#', ...strs)
        return arr.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length===0) return []
        const size=[];
        const arr=[]; 
        let i=0;

        while(str[i] !=='#') {
            let j = i;
            while(str[j] !==',') {
                j++
            }
            size.push(parseInt(str.substr(i,j),10))
            i=j+1
        }
        console.log(size)
        //size=[4,4]
        i++
        for( let sz of size) {
            arr.push(str.substr(i,sz));
            i+=sz
        }
        return arr
    }
}
