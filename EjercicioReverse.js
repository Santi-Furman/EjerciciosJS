/** 
  * Task description: Write a method that reverts input array 
  * Expected Result: [1, 2, 3] => [3, 2, 1] 
  * Task Complexity: 1 of 5 
  * @param {Array} array - Array of any elements 
  * @returns {Array} 
*/
const reverse = (array) => {
    const reverse = (arr) => arr.map((_element, index) => arr[arr.length - 1 - index]);
   }
   const data = [1, 2, 3];
   console.log(reverse(data)); // [3, 2, 1]