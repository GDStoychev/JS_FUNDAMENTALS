/**
 * Write a program that, that finds the three largest numbers in a sequence and prints them in descending order in the following format:

{largest}, {second_largest} and {third_largest}.

 */

const input = [ 6,
    9,
    11,
    30,
    12,
    11,
    8,
    15,
    44
]

// 44, 30 and 15

const findThreeNumbers = arr => {
    let largest = Number.MIN_SAFE_INTEGER
    let secondLargest = Number.MIN_SAFE_INTEGER
    let thirdLargest = Number.MIN_SAFE_INTEGER

    for (let i = 2; i < arr.length; i++) {
        let el = arr[ i ]

        if (el >= largest) {
            thirdLargest = secondLargest
            secondLargest = largest
            largest = el
        }
        if (el < largest && el >= secondLargest) {
            thirdLargest = secondLargest
            secondLargest = el
        }
        if (el <= secondLargest && el >= thirdLargest) {
            thirdLargest = el
        }
    }
    return `${largest}, ${secondLargest} and ${thirdLargest}`
}

console.log(findThreeNumbers(input))