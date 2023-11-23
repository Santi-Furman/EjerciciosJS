/*We need to define a function named fetchData that takes a parameter url, representing the URL from which to fetch data.

Once the fetchData function is created, we create a new promise and within its constructor we use the setTimeout function to simulate a delay of 2 seconds..

After the delay, let's randomly resolve the promise with a mock data object or reject it with a mock error object.

Outside the Promise constructor, return the created promise.

Finally, let’s call the fetchData function with a URL and handle both the resolved and rejected cases using .then() and .catch().

The URL, and the mock data can be defined with an API URL, as https://swapi.dev/ , optionally, add the use of a library like Axios, or Chai HTTP, to successfully retrieve the data via API services.*/

const fetchData = (url) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() <= 0.5) {
                resolve(true)
            }else{
                reject(false)
            }
        }, 2000);
    })
}

fetchData('https://swapi.dev/api/people/1/').then(res => console.log(res)).catch(rej => console.log(rej));

