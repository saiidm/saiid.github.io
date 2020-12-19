let bars = document.querySelector('.fa-bars');
let menu = document.querySelector('.menu');
bars.addEventListener('click', function(){
    menu.classList.toggle('active');
    this.classList.toggle('bars-top');
})