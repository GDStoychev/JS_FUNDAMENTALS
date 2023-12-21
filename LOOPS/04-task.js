/**
 * Task: Find Maximum Element
Write a JavaScript function that takes an array of numbers as an argument and finds the maximum element in the array. Use a loop to iterate through the array and keep track of the maximum element
 */

const input = [ 5, 2, 8, 1, 9, 4 ]

const findMax = arr => {
    let maxNumber = arr[ 0 ]
    for (let i = 1; i < arr.length; i++){
        maxNumber = maxNumber>arr[i] ? maxNumber:arr[i]
    }
    return maxNumber
}

console.log(findMax(input))