/*
 * Complete the 'lengthOfLongestSubstring' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function lengthOfLongestSubstring(s) {
    let maxLength = 0
    let left = 0
    let set = new Set()
    
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) { // if our set has the next element, we move our left pointer up one
            set.delete(s[left])
            left += 1
        }
        set.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }
    
    return maxLength
}
