/*Now that we are able to join conditionals and loops together, create a program to determine if a given number is a prime number. Remember a number is considered prime when it is divisible only by itself and by 1.

Tip: Use the Module operator to determine when a number is divisible by another.*/
function isPrimeNumber(number){
    if (number < 0) {
        return false
    }
    for (let index = 2; index < (number/2) + 1; index++) {
        if(number % index == 0) {
            return false
        }
    }
    return true
}

console.log(isPrimeNumber(13));
console.log(isPrimeNumber(8));
console.log(isPrimeNumber(458));
console.log(isPrimeNumber(2));