const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

let newWindow;

openBtn.addEventListener('click', function() {
        //Code run upon 'open' click
        newWindow = window.open('http://google.com', '_blank', 'pop up', 'witdth=400', 'height=400', 'left=200', 'right=200')
        console.log(newWidow);
})
closeBtn.addEventListener('click', function() {
    //Code run upon 'close' click
    newWindow.close();
})


