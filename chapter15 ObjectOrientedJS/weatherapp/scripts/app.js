// app.js is for DOM manipulation
// get the form, card and details from index.html
// to manipulate time and icon get classes img and icon img from index.html

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


// with these 3 references create function for updating the ui
const updateUI = (data) => {

    // console.log(data);
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    // destructure properties - above properties defined as const cityDets and weather
    // to destructure this (looks neater) - have it like:  (its doing the same as above)

    const { cityDets, weather } = data;



  //update details template - DOM: index.html - parent is details to be set in a
  // template string ``  ---- the values come from data returned as json array
    details.innerHTML = `
      <h5 class="my-3">${cityDets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
               <span>${weather.Temperature.Metric.Value}</span>
               <span>&deg;C</span>
         </div>
        `;

    // update the night/day & icon images - image and icon folder
    // Src will be the source which we will use

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);


    // the ternary operator(bedingter Operator) to shorthand if ...  else clause
    // see below
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    //let timeSrc = null;
    /*if(weather.IsDayTime){
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg';
    }
        */
    time.setAttribute('src', timeSrc);


        // remove the d-none class (in index.html necessary) if present
        // if check if class is there

        if(card.classList.contains('d-none')){
            card.classList.remove('d-none');
        }
};

//update city when entering new city - with async function with weather id and city info
//this async function returns a promise
const updateCity = async (city) => {
    
    //console.log(city);    //for testing purpose that submit of city works
    
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    // return the properties: and data(property value) in an object
    return {

        cityDets: cityDets,
        weather: weather,
        // this in object shorthand notation:
        // would be because name of property and value are the same, just write:
        // return { cityDets, weather };
        // 
    }
}

cityForm.addEventListener('submit', e =>{
    // prevent default action
    e.preventDefault();

// get input field/value for the city

    const city = cityForm.city.value.trin();
    cityForm.reset();   // clearout the form fields with reset

    // update the ui with new city - is also an async function - see function
    // updateUI above
    updateCity(city)
        .then(data => updateUI.log(data))
        .catch(err => console.log(err));


        // update city from local Storage - set local storage
        localStorage.setIntem('city', city);

} );
     // take local storage when user e.g. enters the webpage

        if(localStorage.getItem('city')){
            updateCity(localStorage.getItem('city'))
            .then(data => updateUI(data))
            .catch(err => console.log.apply(err));
        }