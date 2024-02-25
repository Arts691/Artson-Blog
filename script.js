// script.js
const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.previousElementSibling.style.display = 'block';
        button.style.display = 'none';
    });
});
