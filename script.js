const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector('.menu-mobile')

hamburger.addEventListener('click', function() {
    menu.classList.toggle('hidden');
})