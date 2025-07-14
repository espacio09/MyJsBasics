// app.js is for DOM manipulation
// get the form from index.html

const cityForm = document.querySelector('form');

//update city when entering new city - with async function with weather id and city info
const updateCity = async () => {
    
}

cityForm.addEventListener('submit', e =>{
    // prevent default action
    e.preventDefault();

// get input field/value for the city

    const city = cityForm.city.value.trin();
    cityForm.reset();   // clearout the form fields with reset

    // update the ui with new city




} )
