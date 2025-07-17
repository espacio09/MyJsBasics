//   here you have to insert: api key from accu weather developper website
//    https://developer.accuweather.com/  

// in accuweather have the api key for city search (get city search) - with this get then the
//  temperature
const key = 'place api key here from accuweather - which is a random string '


// get weather information location via id
// in accuweather get Current Conditions - Resource URL
const getWeather = async (id) => {

        const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
        const query = `${id}?apikey=${key}`;

        const response = await fetch(base + query);
        const data = await response.json();

        return data[0];

};

// get the city from api key on accuweather - to make the request to the api end point with URL
// below
const getCity = async () => {

        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
// add query parameters to the end of an URL in an template string
        const query =`?apikey=${key}&q=${city}`;

//fetch the resource base and query concatonated by
        const response = await fetch(base + query);

// get Json method on the response: - resolved data is in data constant
        const data = await response.json();
    
        // closest match in the example for manchester is 0 in the array
       //  console.log(data[0]);

       return data[0];
};


// call the method getCity

/* test out that id of temp and get city work - as promise function
getCity('manchester').then(data => {
    return getWeather(data.Key);
    }).then(data => {
    console.log(data);
    }).catch(err => console.log(err));
*/

