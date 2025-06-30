
///////////////////////////////////////////////////////////////
//   Array Methods
//
///////////////////////////////////////////////////////////
// filter method on array - inside a callback function
// filter out array based on a certain condition, e.g. scores of not over 20 are filtered out


//const scores = [10, 30, 15, 25, 50, 40, 5];

//const filteredScores = scores.filter((score) => {
//    return score > 20;
// });

//console.log(filteredScores);


//filter  for premium users (true)
///////////////////////////////////////
//const users = [
//   { name: 'shaun', premium: true },
//    { name: 'yoshi', premium: false },
//   { name: 'mario', premium: false },
//   { name: 'chun-li', premium: true }
//];

//const premiumUsers = users.filter(user => user.premium);

//console.log(premiumUsers);




/////////////////////////////////////////////////
//     Map Method
//       cycles through an Array and we can createa new array based on the old one


// const prices = [20, 10, 30, 25, 15, 50, 40, 80, 5];

// const salePrices = prices.map((price) => {
//     return price / 2;
// });
// console.log(salePrices);


// products which prices are over 30 should be cut by half
// original price under 30 remain the same - old array does not get destroyed
// const products = [
//     { name: 'gold star', price: 20 },
//     { name: 'mushroom', price: 40 },
//     { name: 'green shells', price: 30 }, 
//     { name: 'banana skin', price: 10 },
//     { name: 'red shells', price: 50 },
// ];

// const saleProducts = products.map((product) => {
//     if(product.price > 30){
//         return {name: product.name, price: product.price / 2}
//     } else {
//         return product;
//     }
//  });
//  console.log(saleProducts, products);



 /////////////////////////////////////////////////////////////////////
 ///   Reduce Method
//////////////////////////////////////////////////////////////////////

//  const scores = [10, 20, 60, 40, 70, 90, 30];

//  const result = scores.reduce((acc, curr) => {
//     if(curr > 50){
//         acc++;
//     }
//     return acc;
//  },0);

//  console.log(result);

/////////////////////////////////////////////////////////////////////

// const scores = [
//     { player: 'mario', score: 50 },
//     { player: 'yoshi', score: 30 },
//     { player: 'mario', score: 70 }, 
//     { player: 'crystal', score: 60 },
// ];

// const marioTotal = scores.reduce((acc, curr) => {
//     if(curr.player === 'mario'){
//         acc += curr.score;
//     }
//     return acc;
// }, 0);

// console.log(marioTotal);

///////////////////////////////////////////////////////////
//   Find Method
//  returns the first value in an array which passes the first condition - here bigger than 50

// const scores = [10, 5, 0, 40, 30, 10, 90, 70];

// //  const firstHighScore = scores.find((score) => {
// //     return score > 50;
// //  });

//  /////    or the short way 

//  const firstHighScore = scores.find(score => score > 50);

//  console.log(firstHighScore);

 ///////////////////////////////////////////////////////////////7
// 75. Sort Method
///////////////////////////////////////////

// //  example 1 - sorting strings
// const names = [ 'mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// names.sort();
// names.reverse();
// console.log(names);



// // //example 2 - sorting numbers
// const scores = [10, 50, 20, 5, 35,  70, 45];
// // scores.reverse();
// // console.log(scores);

// scores.sort((a,b) => b - a );
// console.log(scores);


// //example 3 - soring objects
// const players = [
//         { player: 'mario', score: 20 },
//         { player: 'yoshi', score: 10 },
//         { player: 'luigi', score: 50 }, 
//         { player: 'chun-li', score: 30 },
//         { player: 'crystal', score: 70 }
//     ];

// // players.sort((a,b) => {
// //     if(a.score > b.score){
// //     return -1;
// //     } else if (b.score > a.score){
// //         return 1;
// //     } else {
// //         return 0;   
// //     }
// // });

// //  shorter writing with callback function

// players.sort((a,b) => b.score - a.score);


// console.log(players);

//////////////////////////////////////////////////
///   Chain Array Method together


const products = [
        { name: 'gold star', price: 30 },
        { name: 'mushroom', price: 10 },
        { name: 'green shells', price: 40 }, 
        { name: 'banana skin', price: 5 },
        { name: 'red shells', price: 50 },
    ];
    
// const filtered = products.filter(product => product.price > 20);
  

// // we map to an array of strings - after we filtered 2 items out

// const promos = filtered.map(product => {
//        return `the ${product.name} is ${product.price / 2} pounds`;
//      });
// console.log(promos);

/////////////////////////////////////////////////////////////////////////////////
//  both methods filter and map work on arrays and also on strings - so we can restructure the code as follows:
// for better reading code is indented

const promos = products 
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} pounds`);

 console.log(promos);







 