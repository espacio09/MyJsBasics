const clock = document.querySelector('.clock');

//function tick to have the tick for every second displayed in the browser
const tick = () => {

        const now = new Date();

        const h = now.getHours();
        const m = now.getMinutes();
        const s = now.getSeconds();

   //   var console: Console
//    console.log(h, m, s);

// to get the clock into an html DOM put output into a template string 
    const html = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span> : 
    `;

    clock.innerHTML = html;
    
};

setInterval(tick, 1000);
