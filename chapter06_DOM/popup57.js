const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelectorAll('.popup-close');


button.addEventListener('click', () => {
    popup.style.display = 'block';
});

popup.addEventListener('click', () => {
    popup.style.display = 'auto';
});
close.addEventListener('click', () => {
    popup.style.display = 'auto';
});