/**
 * Write a JavaScript function that takes a positive integer n as an argument and calculates the sum of all numbers from 1 to n. Use a loop to iterate through the numbers and accumulate the sum.
 */

const input = [ 1, 3, 4, 5, 2, 10, ]  // sum = 25

const sum = arr => {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

console.log(sum(input))
