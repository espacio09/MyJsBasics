
console.log('****   This is sandbox 5 - Objects in js  ****');


///////////////////////////////////////7////////////
////     Objects - chapter 5 Net Ninja 
///////////////////////////////////////////////

// object literals

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
//     };


    // console.log(user);
    // console.log(user.name);     // access name property

    // // user age updated into 35
    // user.age = 35;
    // console.log(user.age);

    // console.log(user['email']);
    // user['name'] = 'Tatjana';
    // console.log(user['name']);

    //    to see that what we created is an object   

    // console.log(typeof user);

    //////////////////   Add methods to the object - here user     ////////////

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite'],


//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('the user logged out');
//     },
//     logBlogs: function(){
//        console.log('this user has written the following blogs:');
//        this.blogs.forEach(blog => {
//         console.log(blog);
//        });
//     }
// };
        
// user.logBlogs();
// console.log(this);

////   this in this case represents the object in the method - here user  - 
///   does not work in arrow functions - for this should not be used as global in window but on 
///  the object which is user

// /////////////////////////////////////////////////////////////////////////////////////////////

//    insead of a string -  store an object in each blog of the array

// const blogs = [
//     {title: 'Why mach & cheese' , likes: 30 },
//     {title: '10 things to make with marmite', likes: 50 }
// ];
// console.log(blogs);

//////    Array of objects with title and likes - blogs

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [ {title: 'Why mach & cheese' , likes: 30 },
             {title: '10 things to make with marmite', likes: 50 }],
       ///   this is the new array of objects which is the blogs  //////

    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
       console.log('this user has written the following blogs:');
       this.blogs.forEach(blog => {
        console.log(blog.title, blog.likes);
       });
    }
};
        
// user.logBlogs();
// console.log(this);

/////////////////////////////////////////////////////////////////////////////////////
//////    Math object  - built in 

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

////// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));

///////////////////////////////////////////////////////////////////////////
///  Primitive Types  - less memory storage  and       Referent Types  - all types of objects   -bigger storage

/// difference????    at creation of primitive types is stored on a stack

///   at creation of refernces types are stored on heap

////   on stack the values are logged  via variable name
///  on heap a pointer accesses to array on heap

///////////////////////////////////////////////////////////////////////////
//////// copies of primitive cons - are copied into new variable and given new name
///////  copies of reference cons - pointers are copied - not the data into new variable
/////   at changing values - the effect is different


//  primitive values
//////////////////////////////////////////////////////////7
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);


//////////////////////////////////////////////////////////////
//   reference values   - this is an object

// const userOne = {name: 'ryu', age: 30};
// const userTwo = userOne;

// console.log(userOne, userTwo);

///////////    above we see the same object logged to console twice


////////////////////////////////////////////////////////////////////////////////////
//////////////   with reference types values are stored once with two separate pointers
const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40
userOne.name = 'Bololo'

console.log(userOne, userTwo);
