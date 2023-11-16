/** 
  * Task description: Write a method that creates a new array with given values 
  * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
  * Task Complexity: 1 of 5 
  * @param {number} arraySize - size of array 
  * @param {?} value - value to fill 
  * @returns {Array} 
*/
const fill = (arraySize, value) => {
    let newArray = []
    for (let index = 0; index < arraySize; index++) {
        newArray.push(value);
    }
    return newArray;
   }
   const data = 3;
   const valueToFill = 'a';
   console.log(fill(data, valueToFill)) // ['a', 'a', 'a']