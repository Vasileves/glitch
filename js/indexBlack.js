window.onload = function(){
    'use strict';

const menuButtonBlack = document.querySelector('.menu-buttonBlack');
const menuOverlayBlack = document.querySelector('.menu-overlayBlack');


menuButtonBlack.addEventListener('click', function() {
    menuButtonBlack.classList.toggle('active');
    menuOverlayBlack.classList.toggle('open');
}); 

 }