/*For this practice we are going to implement the use of functions and collections in javascript to convert different temperatures from celsius to fahrenheit:

It is necessary to define and implement the function celsiusToFahrenheit() which takes an array of temperatures in Celsius and converts the given Celsius temperature to Fahrenheit. 

On the other hand, the .map() method should be implemented to apply this function to each temperature in the celsiusTemperatures array, creating a new array fahrenheitTemperatures with the converted values. 

Finally, the original and converted temperature arrays will be printed to the console.

Make sure to use multiple functions on this practice, one to convert from celsius to fahrenheit, and another one to get the initial values, call the celsius to fahrenheit function, and print the results.*/

const celsiusToFahrenheit = (c) => (c * 9/5) + 32;

const arrayCelsius = [30, 56, 2, 87]

function convertArrayToFahrenheit(array){
    return array.map((element) => celsiusToFahrenheit(element))
}
const arrayFahrenheit = convertArrayToFahrenheit(arrayCelsius)  

console.log(arrayCelsius)
console.log(arrayFahrenheit)