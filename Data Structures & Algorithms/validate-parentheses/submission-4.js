class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map=[]
        for(let c of s) {
            const top=map.pop();
            if( c===']' || c==='}'|| c===')' && map.length===0) return false
            else if(c==='['|| c==='{'|| c==='('){
                map.push(c)
            }
            else if(
                top==="[" && c!==']' || 
                top==="{" && c!=='}' || 
                top==="(" && c!==')'
            )
                {
                    return false
                }

        }
        return map.length===0
    }
}
