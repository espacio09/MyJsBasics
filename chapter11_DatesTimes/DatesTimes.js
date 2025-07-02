///////////////////////////////////////////////////////////////
//  Chapter 11 Dates & Times
//
///////////////////////////////////////////////////////////
//

const now = new Date();
console.log(now);
console.log(typeof now);


// years, months, days, times  --- some methods
console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

//timestamps
console.log('timestamp:', now.getTime());

// date strings 
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


//timestamps - initial date and a specific date

const before = new Date('February 1 2019 7:30:59');
//const now = new Date();

console.log(now.getTime(), before.getTime());

// difference between two times

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
console.log(mins, hours, days);

// output to the console could be seen from todays date that x days ago blog was written
// to compare it with time stamp of now
// 
console.log('the blog was written ${days} ago');

// converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));
















