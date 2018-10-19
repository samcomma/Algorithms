/*
THREE NUMBER SUM

Wite a function that takes in a non-empty array of distinct integers and an integer 
representing a target sum. The function should find all triplets in the array that
sum up to the target sum and return a two-dimensional array of all these triplets.
The numbers in each triplet should be ordered in ascending order, and the triplets
themselves should be ordered in ascending order with respect to the numbers they 
hold. If no three numbers sum up to the target sum, the function should return an 
empty array.

SAMPLE INPUT: [12, 3, 1, 2, -6, 5, -8, 6], 0
SAMPLE OUTPUT: [[-8, 2, 6],[-8, 3, 5],[-6, 1, 5]]
*/


// OPTIMUM SOLUTION:

function threeNumberSum (array, targetSum) {
    array.sort((a,b)=> a - b)
    let triplets = []
    for (let i = 0; i < array.length - 2; i++) {
        const left = i+1
        const right = array.length - 1
        while (left < right) {
            const currentSum = array[i] + array[left] + array[right]
            if (currentSum === targetSum) {
                triplets.push([array[i], array[left], array[right]])
                left++
                right--
            }
            else if (currentSum < targetSum) {
                left++
            }
            else if (currentSum > targetSum) {
                right--
            }
        }
    }
    return triplets
}






// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


