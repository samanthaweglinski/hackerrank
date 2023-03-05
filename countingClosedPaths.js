/*
 * Complete the 'closedPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number as parameter.
 */

function closedPaths(number) {
    let convertNumToArray = num => Number(num)
    let numArr = Array.from(String(number), convertNumToArray)
    let ans = 0
    
    for (let i = 0; i < numArr.length; i++) {
        let num = numArr[i]
        
        if (num == 0 || num == 4 || num == 6 || num == 9) {
            ans += 1
        } else if (num == 8) {
            ans += 2
        } else continue
    }
    
    return ans
}
