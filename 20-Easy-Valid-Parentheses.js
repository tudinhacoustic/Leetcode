const s = '{[]{{{}}}}[[]';
var isValid = function (s) {
    let st = [];
    let mp = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i] in mp) {
            let topElm = st.pop() || '#';
            if (mp[s[i]] !== topElm) {
                return false;
            }
        } else {
            st.push(s[i]);
        }
    }

    return st.length == 0;
};
const result = isValid(s);
console.log(result);
