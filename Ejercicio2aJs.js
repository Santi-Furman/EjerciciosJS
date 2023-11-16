/*For this practice, we are going to write a JavaScript program that analyzes a given range of numbers and performs the following tasks:

For each number in the range from 1 to 20 (inclusive):

If the number is even, print the number followed by " is even."

If the number is odd, print the number followed by " is odd."

If the number is divisible by 5, print the number followed by " is divisible by 5."

We should take into account the following instructions:

Create a loop that iterates through the numbers from 1 to 20.

Use conditional statements to determine if a number is even, odd, or divisible by 5.

Print out the appropriate message based on the conditions.*/

for (let index = 1; index < 21; index++) {
    
    if (index % 5 == 0) {
        console.log(index + " is divisible by 5.")
    }
    else if (index % 2 == 0) {
        console.log(index + " is even.")
    }else {
        console.log(index + " is odd.")
    }
}

