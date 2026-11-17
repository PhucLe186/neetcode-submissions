class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const arr=[]
        if(strs.length===0) return ""
        for(let str of strs) {
            arr.push(String(str.length))
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
            size.push(parseInt(str[i]))
            i++
        }
        //size=[4,4]
        i++
        for( let sz of size) {
            arr.push(str.substr(i,sz));
            i+=sz
        }
        return arr
    }
}
