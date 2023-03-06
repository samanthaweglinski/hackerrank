/*
 * Complete the 'removeDuplicates' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

/*
Set sounds good here... or stack?

s = abbaca

*/
function removeDuplicates(s) {
    // const set = new Set()
    
    const stack = [s[0]] // [a]
    
    for (let i = 1; i < s.length; i++) { // 3
        if (s[i] !== stack[stack.length - 1]) { // a !== a
            stack.push(s[i])
        } else {
            stack.pop()
        }
    }
    return stack.join("")
}
