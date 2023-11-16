//Now, it is time to write a function sumNumbers that takes an array of elements as input, returns and prints to the console the sum of all numeric elements in the array, the non-numeric elements should be ignored.

//For example:

//sumNumbers([10, "hello", 5, true, 8]) // should return 23

function sumNumbers(array){
    let suma = 0
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (typeof element == 'number') {
            suma += element
        } 
    }
    return suma
}

console.log(sumNumbers([10, "hello", 5, true, 8]))