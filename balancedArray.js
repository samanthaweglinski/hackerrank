/*
 * Complete the 'balancedSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

/*

I: array of integers
O: integer representing index of pivot 

I: arr = [1, 2, 3, 3]
O: 2

  j i
[ 1 2 3 3 ]

*/
function balancedSum(arr) {
    for (let i = 1; i < arr.length - 1; i++) { 
        let leftSum = 0 
        let rightSum = 0 
        
        for (let j = 0; j < i; j++) { 
            leftSum += arr[j]
        }
        
        for (let j = arr.length - 1; j > i; j--) { 
            rightSum += arr[j]
        }

        if (leftSum == rightSum) return i
    }
}
