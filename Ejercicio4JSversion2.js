/*We need to define a function named fetchData that takes a parameter url, representing the URL from which to fetch data.

Once the fetchData function is created, we create a new promise and within its constructor we use the setTimeout function to simulate a delay of 2 seconds..

After the delay, let's randomly resolve the promise with a mock data object or reject it with a mock error object.

Outside the Promise constructor, return the created promise.

Finally, let’s call the fetchData function with a URL and handle both the resolved and rejected cases using .then() and .catch().

The URL, and the mock data can be defined with an API URL, as https://swapi.dev/ , optionally, add the use of a library like Axios, or Chai HTTP, to successfully retrieve the data via API services.*/

//Se llama a la API con el método fetch
const fetchData = (url) =>{
    return fetch(url)
}

//Se verifica el código de respuesta a tráves del then con res.ok
//Si res.ok es true (o sea 200) se accede a los datos del json (en este caso traemos el nombre de /people/1)
//Sino devuelve un error
//Para generar el error se puede cambiar la ruta. Ej: 'https://swapi.dev/api/people/712837jjhasd/'
fetchData('https://swapi.dev/api/people/1/')
    .then(res => {
        if (!res.ok) {
            throw new Error('Hubo un error')
        }
        return res.json()
    })
    .then(data => console.log(data.name))
    .catch(error => console.log(error)); 