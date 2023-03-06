/*
 * Complete the 'first_occurrence' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING haystack
 *  2. STRING needle
 */

/*
I: two strings
O: integer(representing index)

Sliding window or hash map...

  v
s a d b u t s a d
0 1 2 3 4 5 6 7 8

  v
s a d
0 1 2
*/

function first_occurrence(haystack, needle) {
    if (needle.length > haystack.length) return -1

    for (let i = 0; i < haystack.length; i++) {
        
        let needlePointer = 0
        let haystackPointer = i
        
        while (haystack[haystackPointer] == needle[needlePointer]) {
            needlePointer += 1
            haystackPointer += 1
            if (needlePointer == needle.length) return i
        }   
    }
    
    return -1
}
