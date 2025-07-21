//  chapter 15 - Object Oriented Java Script
////////////////////////////////////////

// create new user object - as an array
/*
const userOne = {
    username: :'ryu',
    email: 'ryu@thenetninja.co.uk',
    login(){
        console.log('the user logged in');
        },
    logout(){
        console.log('the user logged out'); 
    }
};
console.log(userOne.email, userOne.username);
userOne.login();

// second user
const userTwo = {
    username: :'chun li',
    email: 'chun.li@thenetninja.co.uk',
    login(){
        console.log('the user logged in');
        },
    logout(){
        console.log('the user logged out'); 
    }
};
console.log(userTwo.email, userTwo.username);
userTwo.login();
*/

//////    this all would result in a mess creating x-users so there is a better
//////    way to do this
/////     Classes in JS

//       built a class with inside a constructor function
//       give properties to the instance in the constructor

class User{
    constructor(){
        // set up properties on the object
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    //  here goes the method - not in the constructor
    //  give methods to users

    login(){
        console.log(`${this.username} just logged in`);
        return this;
    }
    logout(){
        console.log(`${this.username}just logged out`);
        return this;
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username}has a score of ${this.score}`);
        return this;
    }
}

// subclasses extend ordinary classes (inherit all functionality from the ordinary class)
//  e.g. subclass is used to create
// user with admin rights to delete users - which a normal user is not allowed to do
// admins get extra methods e.g.

class Admin extends User{
deleteUser(User){
        users = users.filter(u => u.username !== userOne.username);
     }
}

// the 'new' keyword
// 1 - it creates a new emtpy object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object


const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk');

// method chaining
console.log(userOne, userTwo, userThree);

////    as admin I want to delete one of these users
let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);

//userOne.login().incScore().incScore().logout();




/*   LOCAL STORAGE   //////////////////////
//  store data in local storage - e.g. for a user wants to come back to his
//  currently used data on website in the browser
//  all char in local storage get converted into a string

 localStorage.setItem('namen', 'mario');
 localStorage.setItem('age', '50');

// retrieve data from local storage to use it in the application
let name = localStorage.getItem('namen');
let age = localStorage.getItem('age'); 

console.log(namen, age);

// updating data - in local storage is looked up if data exisits - if so
//  it gets updated, if not it is set newly

 localStorage.setItem('namen', 'luigi');
 localStorage.setItem('age', '99');

 namen = localStorage.getItem('namen');
 age = localStorage.getItem('age');
 console.log(namen, age);


 // deleting data from local storage

localStorage.removeItem('namen');

namen = localStorage.getItem('namen');
console.log(namen);    // will display null

// to clear all items from localStorage
localStorage.clear();


////////////////////////////////////////
//  js array of objects - to store it in localStorage
//  1st turn it into a json string - method stringify

const todos = [

    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy somemilk', author: 'mario'},
    {text: 'buy somebread', author: 'luigi'}
];

//   console.log(JSON.stringify(todos));

localStorage.setItem('todos', JSON.stringify(todos));

/////////////////////////////////////////////////////////
// retrieve the JSON data

const stored = localStorage.getItem('todos');
console.log(stored);

//JSON parse to turn it into an array

console.log(JSON.parse(stored));

*/