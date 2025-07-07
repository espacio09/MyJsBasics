/*

console.log(1);
console.log(2);

//  simulation for network request (async code) to be processed - which fires later - does not block the code logs 1 to 4 here

setTimeout(() => {
    console.log('callback function fired ');
}, 2000);

console.log(3);
console.log(4);


///////////////////////////////////////////////
/////    HTTP requests
///////////////////////////////////////////////

/// make a request object    
//  - for http request tests -  use json placeholder api on browser
//send a request to get some data back

//   also have an event listener to check state change in the request at any time

/*
const request = new XMLHttpRequest();

request.addEventListener('readystatechange',() => {
// console.log(request, request.readyState);
});

// we want to do sth. with the data at state 4 - have the response data
if(request.readyState === 4){
    console.log(request.responseText);
}

request.open('GET','https://jsonplaceholder.typicode.com/todos/');
request.send();

*/

////////////////////////////////////////////////////
//   90. Response status
///////////////////////////////////////////////////

// what if an error is in the request?
// check readyState and status   - status 200 - data will come back
//   status 404 means - endpoint not correct - URL cannot be found
//   see mozilla MDN guide for status codes
/*
const request = new XMLHttpRequest();

request.addEventListener('readystatechange',() => {
// console.log(request, request.readyState);
});

// we want to do sth. with the data at state 4 - have the response data
if(request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
} else if (request.readyState === 4) {
    console.log('could not fetch the data');
}

//error in URL
request.open('GET','https://jsonplaceholder.typicode.com/todosxx/');
request.send();


/*
///////////////////////////////////////////////////////
//  91. callback functions
// callback function if task is complete - all responses got received
// wrap up code into a function - make a request to make it more usable

const getTodos = (callback) => {

const request = new XMLHttpRequest();

request.addEventListener('readystatechange',() => {
// console.log(request, request.readyState);
});

// we want to do sth. with the data at state 4 - have the response data
if(request.readyState === 4 && request.status === 200) {
    callback(undefined, request.responseText);
} else if (request.readyState === 4) {
    callback('could not fetch data', undefined);
}

//error in URL
request.open('GET','https://jsonplaceholder.typicode.com/todosxx/');
request.send();
};

// callback function in function getTodos 
// - different callback functions can be called to do different tasks

//   with asynchronous code as in callback function - running code is not blogged:

console.log(1);
console.log(2);

//callback function will wait and be executed at the end
getTodos((err, data)    => {
    console.log('callback fired');
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(3);
console.log(4);


*/

/* //////////////////////////////////////////////////////////////////
//   92. working with JSON data - use it (parsing it)
//        as java script objects in order to further use them

const getTodos = (callback) => {

const request = new XMLHttpRequest();


// we want to do sth. with the data at state 4 - have the response data
if(request.readyState === 4 && request.status === 200) {
    // in data array of JSON data(string) will be parsed in as js data objects
    const data = JSON.parse(request.responseText);
    callback(undefined,data);
} else if (request.readyState === 4) {
    callback('could not fetch data', undefined);
}

//use json file in same directory as sandbox file
//  as output see json data as js objects

request.open('GET','todos.json');
request.send();
};

getTodos((err, data)    => {
    console.log('callback fired');
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

*/

//////////////////////////////////////////////////////////////////
//   93. callback hell
//        have several json files that we want to call 
//        and read the data out -  of one after the other
//        use resource to read the different files as input data
/*
const getTodos = (resource, callback) => {

const request = new XMLHttpRequest();


// we want to do sth. with the data at state 4 - have the response data
if(request.readyState === 4 && request.status === 200) {
    // in data array of JSON data(string) will be parsed in as js data objects
    const data = JSON.parse(request.responseText);
    callback(undefined,data);
} else if (request.readyState === 4) {
    callback('could not fetch data', undefined);
}

//use json file in same directory as sandbox file
//  as output see json data as js objects

request.open('GET',resource);
request.send();
};


// nested callback in callback in callback - is nesting hell

getTodos('todos/luigi.json', (err, data) => {
    console.log(data);
       getTodos('todos/luigi.json', (err, data) => {
        console.log(data);
        getTodos('todos/luigi.json', (err, data) => {
            console.log(data);
        });
    });
});

*/
//////////////////////////////////////////
///    94. Promise Basics
///        - promises: concept to avoid nested callback functions
/*          example:

const getSomething = () => {

    return new Promise((resolve, reject)  => {
       // fetch some data - resolve or reject - error or success

        resolve('some data');

       // reject('some error');
        });

getSomething().then((data)   =>  {
    console.log(data);
});
}
*/

///        - promises: concept to avoid nested callback functions
//           here the code how it works
/*
const getTodos = (resource) => {

    return new Promise((resolve, reject)  => {
    const request = new XMLHttpRequest();

request.addEventListener('readystatechange'),() => {
if(request.readyState === 4 && request.status === 200){
    const data = JSON.parse(request.responseText);
    resolve(data);
    };

} else if(request.readyState === 4){
    reject('error getting resource');
}
});

request.open('GET',resource);
request.send();

// .then takes in a function - catch for the error

getTodos('todos/luigi.json').then(data => {
    console.log('promise resolved:', data);
}).catch(err => {
    console.log('promise rejected:' , err);
};
});
*/

/*
/////////////////////////////////////////////
//    95. Chaining Promises
///       use promises to manage network requests

const getTodos = (resource) => {

    return new Promise((resolve, reject)  => {
    const request = new XMLHttpRequest();

request.addEventListener('readystatechange'),() => {
if(request.readyState === 4 && request.status === 200){
    const data = JSON.parse(request.responseText);
    resolve(data);
    };

} else if(request.readyState === 4){
    reject('error getting resource');
}
});

request.open('GET, resource);
request.send();

});
};


// .then takes in a function - catch for the error for all of the functions
//  promise fires for every function

getTodos('todos/luigi.json').then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos('todos/mario.json');
}).then(data =>  {
    console.log('promise 2 resolved:', data);
    return getTodos('todos/shaun.json');
 }).then(data =>  {
    console.log('promise 3 resolved:', data);
}).catch(err => {
    console.log('promise rejected:' , err);
});

*/

/*
//////////////////////////////////////////////////
//////   96. fetch API   - includes promises and requests
    //                     fetch api is an easier way to get data
    //                     is built right into the language
///  returns a promise
//   resolve object and in catch reject object
//  rejection only if api is not reachable - having e.g. a typo in json file name
//  no rejection fired - get 404 error


fetch('todos/luigi.json').then((response)  => {
    console.log('resolved', response);
    // to get json data is parsed and displayed you have to request the json response
    //  response is another promise - return required
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});

*/

//////////////////////////////////////////
//  97 Async and await
//        - chain promises together in a clean and readable way

//   98  Throwing and catching  errors  - .catch


// create an async function:

const getTodos = async () => {

   const response = await  fetch('todos/luigi:json'); 

  /// to catch error if status is not 200 - e.g. when an resource error occurs e.g. wrong file name
    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }
   const data = await response.json();
   return data;

};

///// test that code gets executed - async function will be fired at the end - 
////  not to block the other code inbetween

console.log(1);
console.log(2);

getTodos()
.then(data => console.log('resolved:', data));
.catch(err => console.log('rejected:', err.message));

console.log(3);
console.log(4);


