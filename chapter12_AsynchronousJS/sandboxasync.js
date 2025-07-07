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
