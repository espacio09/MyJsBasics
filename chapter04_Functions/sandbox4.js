
console.log('This is sandbox 4 - Functions in js');

let email = 'tatjanaKlatyik@aol.com';
console.log(email);
///////////////////////////////////////7////////////
////      Functions & Methods - chapter 4 Net Ninja 
///////////////////////////////////////////////

// function declaration   /// here do not have a ; at the end


function greet2(){
    console.log('guguuuuuuuuuuuuu');
}
greet2()

function greet(){
    console.log('hello there');
}
greet()
greet()


//function expression   /////  at the end of it always have a ;
////   not to get a hoist problem - declare expression first, then use them !!!!!

const speak = function(){
    console.log('good day!');
};

speak();

/// arguments & parameters   - passing values into a function - which we can then use .... here 'name'
//                               used then as mario

const tell = function(name){
    console.log(`good day ${name}`);
};

tell ('mario');

///  serveral parameters  - the order of name, time of function must be same as in output - here mario, morning

const show = function(name, time){
    console.log(`good ${time}, ${name}`);
};

show ('mario', 'morning');


//// default values for parameters

const shownew = function(name = 'luigi', time = 'night'){
    console.log(`good ${time}, ${name}`);
};

shownew ();    //////with the defaults
shownew ('shaun');     /////////   with new value shaun


//////////////////////

//  returning values
// regular function

const calcArea1 = function(radius){
    // let area = 3.14 * radius**2
    // return area;      ////return as function is storing that variable - here area and not putting it to console
/// or simply  
 return 3.14 * radius**2;
}

const area1 = calcArea1(5);     //// area holds the return value of result of function calcArea with radius 5

console.log('The area is today: ',area1);


// arrow function
const calcArea2 = (radius) => {
    return 3.14 * radius**2;
    };

// or instead
// const calcArea2 = radius => 3.14 * radius**2;


const area2 = calcArea2(40);     //// area holds the return value of result of function calcArea with radius 5
    console.log('The area is today: ', area2);



///////    practise arrow functions    //////////

const greet3 = function(){
    return 'hello, greet-3';
};

const greet1 = () => 'hello, world';
const result = greet1();
console.log(result);

// log something directly to the console
///////////////////////////////////////////////////////////
const bill = function(products, tax){
    let total = 0;
    for(let i =0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill([10,15,30], 0.2));
/////////////////////////////////////////////////////////////
//   Arrow function on this previous function

const bill2 = (products, tax) => {
    let total = 0;
    for(let i =0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill2([10,15,30], 0.2));

//////////////////////////////////////////////////////////
///    Functions vs. methods   ---- envoking is different

const greet4 = () => 'hello4';
let resultOne = greet4();
console.log(resultOne);

//////         methods     are called on .    which is dot-notation
const name = 'shaun';
let resultTwo = name.toUpperCase();
console.log(resultTwo);

////////////    callbacks & foreach
///   passing in a function into another function as argument

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    // do something
    console.log(value);
});

//////////////       Built-in method forEach  --- which iterates over an array

let people = ['mario', 'luigi', 'shaun'];

///   
people.forEach(function(person){
    console.log(person);
});

////////////   arrow function version  of forEach   parameters index and person /////////////////////
////// callback functions are passed into another function   

let volunteersBe = ['CFRG', 'lklsnoi', 'ppeoid'];

volunteersBe.forEach((person, index) => {
    console.log(index, person);
});


let Neighbours = ['CFRG', 'lklsnoi', 'ppeoid'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

Neighbours.forEach(logPerson);



//     get a reference to the 'u1'
//////////// to see callback functions in action ----- change index.html file u1 class = people

const ul = document.querySelector('.people22');

const people22 =  ['lustig', 'schnell', 'gebaut'];

let html = ``;

people22.forEach(person => {
    // create html template
    html +=`<li style="color: purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;


