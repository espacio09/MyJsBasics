
console.log('****   This is sandbox 6 - JavaScript & the DOM  ****');


///////////////////////////////////////7//////////////////////
////
////     JavaScript & the DOM  - chapter 6 -    Net Ninja 
////            Interacting with a Browser
/////////////////////////////////////////////////////////////////



///  prepare Liveserver  in VsCode  - Package install
///  then come to index.html file - which you want the Liveserver to open with - right click
///  and open with liveserver

//////////////////////////////////////////////////////////////
///  Working with the DOM     as tree of nodes    to design and access your webpage

///  Reaching and selecting the elements is quering the DOM




/// Storing elements in variable

// const para = document.querySelector('div,error');   
//  //// grabs first p tag
// console.log(para);

// const para2 = document.querySelector('.error');   

// console.log(para2);


// ///////////////////////////////////////////////////////////////////////////////
///  get all selectors of an html element

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {    ////  cicles through the node list of the array
//     console.log(para)
    
// })
// console.log(paras);
// console.log(paras[2]);      ////  3rd element of group of nodes

//////////////////////////////////////////////////////////////////////////////////////7
// grab elements in the DOM      -    querySelector and querySelectorAll
//

//   const para = document.querySelector('body > h1'),
//   console.log(para)

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// console.log(errors);

////////////////////////////////////////////////////////////////////////////////////////
//   get an element by ID

// const  title = document.getElementById('page-title');
// console.log(title);

// //   get elements by their class name

// const errors2 = document.getElementsByClassName('error');
// console.log(errors2);


//  get element by tag name

// const paras2 = document.getElementsByTagName('p');
// console.log(paras2);
// console.log(paras2[2]);

// ////////////////////////////////////////////////////////////////////////////////////
///    grab elements and change the text of them

//const paras = document.querySelectorAll('p');
//console.log(para.innerText);
//para.innerText = 'I do not like any Ninjas ';      //  replace existing  test of tag
//para.innerText += 'I do not like any Ninjas ';     // append text to existing text

// const content = document.querySelector('.content');

//console.log(content.innerHTML);
//content.innerHTML += '<h2>THIS IS A NEW H2</h2>';



////    cycle through for each person - output in HTML
// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// })



////////////////////////////////////////////
///   store tags  - get and set value of attributes e.g. href

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'TheNet Ninja Website';

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green');
// //  here style is added to html - even if not in index file

///////////////////////////////////////////////////////
// set style attribute not overwriting any former settings
// and its css properties e.g. color, background-color
//

// const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px;');
// style property with css property color
//console.log(title.style)
//console.log(title.style.color.backgroundColor);

// title.style.margin = '60px';
// title.style.color = 'crimson';
// title.style.fontSize = '30px';
// title.style.margin = '';    /// empty margin means remove margin from above


////////////////////////////////////////////////////////////
//   Add and remove/change classes from elements
//   in JavaScript

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.add('remove');
// content.classList.add('success');

////////////////////////////////////////////////
//    for each p tag looks for the word error or success
//
const paras = document.querySelectorAll('p');

// paras.forEach(p => {
//     console.log(p.textContent);

//     paras.forEach(p => {
//         if(p.textContent.includes('error')){
//         p.classList.add('error');
//     }
//         if(p.innerText.includes('success')){
//             p.classList.add('success');
//         }
// });

// ////    Toggle classes   ////////
// /////////////////////////////////


// const title = document.querySelector('.title');

// title.classList.toggle('test');
/////////////////////////////////////////////////////////////////////////////////////////////////////
///
///     Parent, children & siblings   - selection of elements


const article = document.querySelector('article');

//   Array vs. collection
// console.log(article.children);
// console.log(Array.from(article.children));
// console.log(article.children);

//   selection of all children
// Array.from(article.children).forEach(child => {
//     child.classList.add('article-element');
//});

//  selection of the parent

// const title = document.querySelector('h2');

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);

// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// //  chaining
// console.log(title.nextElementSibling.parentElement.children);



///////////////////////////////////////////////////////////////
//    Event  Basics (click events)
//  here click button with Event Listener - callback function () => gets fired - you clicked me is displayed
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked me');
// });


//   All li tags should be selected - with querySelectorAll we get a node list
//   we cycle through each li
/////////////////////////////////////////////////////7

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         //console.log('each li tag clicked');

//         //event object (e) detected
//        // console.log(e);
//        //  which of the items are clicked - target is the html element from the element list
    
//         // console.log(e.target);   // or 
//         // console.log(item);

//  //// /////  when we click an event - css property - the we want to have a strikethrough
//         e.target.style.textDecoration = 'line-through';
//     });
// });


////////////////////////////////////////////////////////////////////////
////  54. Creating & Removing Elements


// const ul = document.querySelector('ul');
// ul.remove();


//// remove method on the li tags - each one on click gets removed - no strike through

// const items = document.querySelectorAll('li')

// items.forEach(item => {
//     item.addEventListener('click', (e) => {
        
//         e.target.remove();
//     });
// });


/////   Add new li tag to the webpage - to the ul list when we click the button

const ul = document.querySelector('ul');

const button = document.querySelector('button');
button.addEventListener('click',  () => {
    
    // ul.innerHTML += '<li>something new</li>'     ///// or do this

   const li = document.createElement('li');    //// create an li tag
   li.textContent = 'something new to do';      /// text should be

  //// ul.append(li);    //// put the li tag at the bottom of the ul parent

   ul.prepend(li);       ///   adds the new li tag to the top
});


// const items = document.querySelectorAll('li')

// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log('event in LI');
//         e.stopPropagation();    /// stops the event listener on UL from firing and its callback funtion
//         e.target.remove();
//     });
// });

/////////////////////////////////////////////////////7
/// 55. Event bubbling and delegation
/////////////////////////////////////////////////////

// ul.addEventListener('click', e => {
// console.log('event in UL');
//  })

///////////////////////////////////////////////////////////7
////   Event delegation    not having an Eventlistener on each individual tag  - li or ul or etc.
// just one event listener on ul

/////   delete any li tag within the  ul - tagname in event target should be li - see DOM tree

ul.addEventListener('click', e => {
        console.log(e);
        if(e.target.tagName === 'LI'){
            e.target.remove();

        }
    })

////////////////////   56. More DOM Events    ///////////////////7
///   copy text in browser   with query selector

const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {

    console.log('OI! my content is copyright');

});

//   mouse move event   //////////

// const box = document.querySelector('.box');

// box.addEventListener('mousemove', e => {
//     //console.log(e);
//    // console.log(e.offsetX, e.offsetY);    //// log box coordinates inside the box

//    box.textContent = 'x  pos - ${e.offsetX} y  pos - ${e.offsetY}';
// });

// document.addEventListener('wheel', e => {
//     console.log(e.pageX, e.pageY);
// })
//////////////////////////////////////////////////////////////////////////////77
///////////   57. Building a popup    /////////////////////////////










