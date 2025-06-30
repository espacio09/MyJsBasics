
///////////////////////////////////////////////////////////////
//   Ninja Quiz
//
///////////////////////////////////////////////////////////

// all correct answers are B - here stored in an array for later on
// comparing them against user input



const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');


// show the result on form
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault();

let score = 0;
const userAnswers = [form.q1.value, form.q2value, form.q3.value, form.q4.value];

// check answers
userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
        score+= 25;
    }
});

// console.log(score);
// ///////////////////////////////////////
// show result on page - score in percentage - depending on correct answers
result.querySelector('span').textContent = `${score}%`;

// show result o page top
scrollTo(0,0);

// remove class display none = bootstrap: d-none, in oder to show percentage
result.classList.remove('d-none');



////////////////////////////////////////////////////////
//  69. The window Object
//
//  Scrolling on a form
//  After submit automatically scroll to top
//  to see the score

//   Use the     window object 
//   which is the global object in javascript   !!!!!!!!!!!!!!!
//    ///////////////////////

//   console.log('hello');
// the same would be:    window.console.log('hello');

//  also  console.log(window.document.querySelector('form'));
//  








// in intervals display the changing score
let output = 0;
const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
        clearInterval(timer);
         } else {
            output++;
        }
}, 100);
})


//  How to fire intervals
// ///////////////////////////
// let i = 0;
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if(i === 5){
//         clearInterval(timer);
//     }
// }, 1000);

