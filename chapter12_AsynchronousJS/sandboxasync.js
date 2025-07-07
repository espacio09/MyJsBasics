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


////////////////////////////////////////////////////////
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


