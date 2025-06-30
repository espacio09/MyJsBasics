// console.log(1);
// console.log(2);
// //alert('hello world');

//const { ConsoleLogEntry } = require("selenium-webdriver/bidi/logEntries");


// // declaring a variable
// let age = 25;
// let year = 2019;

// console.log(age, year);
// age = 40;

// console.log(age);

// const points = 100;
// points = 50;
// console.log(points);


// strings

console.log('hello world');

let email = 'tatjanaKlatyik';
console.log(email);

//////////////////////////////////////////////////////
// //for loops
// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }
// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi' ];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);

//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }
//////////////////////////////////////////////

//while loops
///////////////////////////////////////////////

// const names = ['shaun', 'mario', 'luigi' ];
// let i = 0;  ///initialization of i
// while(i < 5){
//     console.log('in loop: ', i);
//     i++;
// }


// const names = ['shaun', 'mario', 'luigi' ];
// let i = 0;  ///initialization of i
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

/////////////////////////////////////////////////////
//     do whle loop


let i = 5;  ///initialization of i

do{
    console.log('value of i is: ', i);
    i++;
} while(i < 5);

// ////////////////////////////////////////////////////
///   if statements

// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun','ryu','chun-li','yoshi'];
// if(ninjas.length > 3){
//     console.log("that's a lot of ninjas");
// }


// const password = '12345678';

// if(password.length >= 8){
//     console.log('this password is long enough');
// }

///////////////////////////////////////////////
//    if    else  ------ checking password length

// const password = '1234';

// if(password.length >= 12){
//     console.log('this password is very strong');
// } else if(password.length >= 6){
//     console.log('that password is long enough');
// } else {
//     console.log('password is too short');
// }


///////////////////////////////////////////////
//    logical operators ------ OR ||    AND  &&

// const newpass = '123456';

// if(newpass.length >= 12 && newpass.includes('@')){
//     console.log('this password is very strong and has @ in it');
// } else if(newpass.length >= 6 || newpass.includes('@')){
//     console.log('that password is long enough');
// } else {
//     console.log('password is too short');
// }
//////////////////////////////////////////////

//             logical NOT (!)

// let user = false;

// if(!user){
//     console.log('you must be logged in to continue');

//     console.log(!true);   //   will display false on console
//     console.log(!false);   //  will display true on console
// }

/////////////////////////////////////////
//   break and continue
//  break breaks out off the loop at certain condition - here when 100 is reached

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i= 0; i < scores.length; i++){

// when 0 is scored - iteration breaks here and starts looping again
// - not showing the 0 but continuing iterating

//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('your score:  ', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }

// ///////   switch statements   - are equality checks

// const grade = 'A'; /////e.g. C would not be a valid grade - which would display the default message

// switch(grade){
//         case 'A':
//             console.log('you got an A!');
//             break;
//             /////break stops the case condition - and starts again with the next case and checks it

//         case 'B':
//             console.log('you got a B');
//             break;
//         case 'D':
//             console.log('you got a D');
//             break;
//          default:
//             console.log('you got no valid grade - you failed');
//                 break;
// }

//////////////////////////////////////////
/////      variables - global and code block scope
////      const does the same as let - but cannot be individually redifined
// let age = 30;

// if(true){
//     let age = 40;   // this is local scope
//     let name = 'shaun';  /// shaun is local scope - on outside not to be seen or accessed
//     console.log('inside 1st code block: ' , age);
//     }
    //   inside code block - age can be redefined e.g. to 40
    ////////////////////////   outside code block

    //     ////   nested code block  will take age from 1st declaration
    //     if(true){
    //         console.log('inside 2nd code block: ', age);
    //     }

    // console.log('outside code block: ', age);


///////////////////////////////////////7////////////
////      Functions & Methods - chapter 4 Net Ninja 
///////////////////////////////////////////////


