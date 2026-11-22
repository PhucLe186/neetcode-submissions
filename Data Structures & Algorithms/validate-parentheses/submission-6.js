class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = [];

        for (let c of s) {
            if (c === '[' || c === '{' || c === '(') {
                map.push(c);
            } else {
                const top = map.pop();

                if (
                    (top === '[' && c !== ']') ||
                    (top === '{' && c !== '}') ||
                    (top === '(' && c !== ')') ||
                    top === undefined
                ) {
                    return false;
                }
            }
        }

        return map.length === 0;
    }
}