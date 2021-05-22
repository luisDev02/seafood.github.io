function ScrollAppear() {
    var container_allother =document.querySelector('.container-allother');
    var introPosition = container_allother.getBoundingClientRect().top;
    var screenPosition = window.innerHeight/1.3;

    if (introPosition<screenPosition) {
        container_allother.classList.add('intro_appear');
    }
}
window.addEventListener('scroll',ScrollAppear);

function ScrollApper2() {
    var container_all =document.querySelector('.container_all');
    var introPosition = container_all.getBoundingClientRect().bottom;
    var screenPosition = window.innerHeight/1.3;

    if (introPosition<screenPosition) {
        container_all.classList.add('intro_appear');
        
    }
    
}
window.addEventListener('scroll',ScrollApper2);