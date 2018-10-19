/*
TWO NUMBER SUM

Wite a function that takes in a non-empty array of distinct integers and an integer 
representing a target sum. If any two numbers in the input array sum up to the target 
sum, the function should return them in an array, in sorted order. If no two numbers 
sum up to the target sum, the function should return an empty array. Assume that there 
will be at the most one pair of numbers summing up to the target sum.

SAMPLE INPUT: [3, 5, -4, 8, 11, 1, -1, 6], 10
SAMPLE OUTPUT: [-1, 11]
*/


// INITIAL SOLUTION:

function twoNumberSum(array, targetSum) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                return [array[i], array[j]].sort((a, b) => a - b)
            }
        }
    }
    return []
}

// O(n^2) time | O(1) space



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// OPTIMUM SOLUTION:

function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a - b)
    let left = 0
    let right = array.length - 1
    while (left < right) {
        const currentSum = array[left] + array[right]
        if (currentSum < targetSum) {
            left++
        }
        else if (currentSum > targetSum) {
            right--
        }
        else if (currentSum === targetSum) {
            return [array[left], array[right]]
        }
    }
    return []
}

// O(nlog(n)) time | O(1) space