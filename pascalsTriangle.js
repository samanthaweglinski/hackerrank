/*
 * Complete the 'generate' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts INTEGER numRows as parameter.
 */

function generate(numRows) {
    let ans = []
    
    for (let i = 0; i < numRows; i++) {
        ans[i] = []
        ans[i][0] = 1
        for (let j = 1; j < i; j++) {
            ans[i][j] = ans[i-1][j-1] + ans[i-1][j]
        }
        ans[i][i] = 1
    }
    return ans
}
