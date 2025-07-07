//   use library date fns to manipulate dates in js
//   https://date-fns.org/v4.1.0/docs/format
//   currently mentioned only npm installation for date fns library - 
//   to use it directly via browser in index.html ??????


const now = new Date();

//  formatting options using date fns library
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));    //without commas is possible

//   comparing dates
const before = new Date('February 1 2019 12:00:00');

// {addSuffix: true}    shows the word "ago"
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));






