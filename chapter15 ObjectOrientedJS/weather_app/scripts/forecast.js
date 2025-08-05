//   here you have to insert: api key from accu weather developper website
//    https://developer.accuweather.com/  

// in accuweather have the api key for city search (get city search) - with this get then the
//  temperature
//  and weather information for the city
//  the api key is used to get the weather information for a specific city



class Forecast{
// constructor to set the city
//  the constructor is called when a new instance of the class is created       
    constructor(){
        this.key = '7PrviPgDK4L1AGEO5zX6mqswBpjAry';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        }

        // set the city to get the weather information for
       async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        // return an object with the city and weather information
        return {cityDets, weather};

       }
       async getCity(city) {
        // get the city data from the API
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0]; // return the first match
        //  this is the city data with the id to get the weather information

       }  
       async getWeather(id) {
        // get the weather data from the API
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0]; // return the first match
        //  this is the weather data for the city with the id
       }                        

 }


