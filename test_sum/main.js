//script run with defer
document.getElementById('btnTab').addEventListener('click', this.openTab);
document.getElementById('btnWin').addEventListener('click', this.openWin);

function openTab(ev) {
    console.log('open a tab');
    let win = window.open('tab.html', null, null);
    win.onload =(ev)=>{
        win.document.body.style.backgroundColor = 'a999';
        setTimeout(() => {
            win.close();
        }, 2500);
        }
    };

function openWin(ev) {
    console.log('open a popup window');

    // **********        open up window with size definition
 /*     let win = window.open(
        'win.html', null, 
        'popup,width=400,height=400,left=300,top=500, noopener'
    );*/


    // *********        open up a blank page
    // no win onload when file is blank
    
    let win = window.open(
        '', 
        null, 
        'popup,width=400,height=400,left=300,top=500'
    );

    //****     write html content to document in browser */
         win.document.write(
            '<html><head><title><Sample</title></head><body>Sample></body></html>'
        );

        //****   resize window per interval and close it */
        // win onload not when you are building your own file  from scratch
        //win.onload = () => {
        let timmy = setInterval(()=>{
            let w = Math.random() * parseInt(window.screen.availWidth);
            let h = Math.random() * parseInt(window.screen.availHeight);
            win.resizeTo(w, h);
        }, 1000);

        setTimeout(()=>{
            clearInterval(timmy);
            win.close();
        }, 6000);
    };
