// app.js is for DOM manipulation
// get the form from index.html

const cityForm = document.querySelector('form');

//update city when entering new city - with async function with weather id and city info
//this async function returns a promise

const updateCity = async (city) => {
    
    //console.log(city);    //for testing purpose that submit of city works
    
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    // return the properties: and data in an object
    return {

        cityDets: cityDets,
        weather: weather,
    }
}

cityForm.addEventListener('submit', e =>{
    // prevent default action
    e.preventDefault();

// get input field/value for the city

    const city = cityForm.city.value.trin();
    cityForm.reset();   // clearout the form fields with reset

    // update the ui with new city - is also an async function

    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err));
} )
