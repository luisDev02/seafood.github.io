const scrollreveal = require("./scrollreveal");

function ScrollAppear() {
    var container_allother =document.querySelector('.container-allother');
    var introPosition = container_allother.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if (introPosition<screenPosition) {
        container_allother.classList.add('intro_appear');
    }
}

window.sr =scrollreveal();

sr.reveal('.container-flex-img',{
    duration:4000,
    origin:'left',
    distance:'400px'


});