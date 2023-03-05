/*
 * Complete the 'addToArrayForm' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY num
 *  2. INTEGER k
 */

function addToArrayForm(num, k) {
    let numStr = num.join("")
    let sum = Number(numStr) + k
    
    let convert = num => Number(num);
      
    var res = Array.from(String(sum), convert);
    
    return res
}
