function ScrollAppear() {
    var container_allother =document.querySelector('.container-allother');
    var introPosition = container_allother.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if (introPosition<screenPosition) {
        container_allother.classList.add('intro_appear');
    }
}
window.addEventListener('scroll',ScrollAppear);


function ScrollAppe() {
    var container_flex =document.querySelector('.container-all');
    var introPosition = container_flex.getBoundingClientRect().left;
    var screenPosition = window.innerHeight/1.3;
    if (introPosition<screenPosition) {
        container_flex.classList.add('intro_appear2');
    }
}
window.addEventListener('scroll',ScrollAppe);

