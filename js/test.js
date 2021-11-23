window.onload = function(){ 
    setTimeout(function (params) {
      $(".talentCard").addClass("removed")
    },700)

  
    $(function() {
      $( "#talentCard" ).draggable({stack: 'div'});
      $('#talentCard').addClass('shadow');
  
    });
  
      $(function() {
      $( "#talentCard2" ).draggable({stack: 'div'});
      $('#talentCard2').addClass('shadow');
  
    });
  
    $(function() {
      $( "#talentCard3" ).draggable({stack: 'div'});
      $('#talentCard3').addClass('shadow');
    
      });
  
    $(function() {
      $( "#talentCard4" ).draggable({stack: 'div'});
      $('#talentCard4').addClass('shadow');
    
      });
    $(function() {
      $( "#talentCard5" ).draggable({stack: 'div'});
      $('#talentCard5').addClass('shadow');
  
    });
  
      $(function() {
      $( "#talentCard6" ).draggable({stack: 'div'});
      $('#talentCard6').addClass('shadow');
  
    });
  
    $(function() {
      $( "#talentCard7" ).draggable({stack: 'div'});
      $('#talentCard7').addClass('shadow');
    
      });
  
    $(function() {
      $( "#talentCard8" ).draggable({stack: 'div'});
      $('#talentCard8').addClass('shadow');
    
      });
      
    $(function() {
      $( "#talentCard9" ).draggable({stack: 'div'});
      $('#talentCard9').addClass('shadow');
  
    });
  
      
        'use strict';
    
    const menuButtonBlack = document.querySelector('.menu-buttonBlack');
    const menuOverlayBlack = document.querySelector('.menu-overlayBlack');
    
    
    menuButtonBlack.addEventListener('click', function() {
        menuButtonBlack.classList.toggle('active');
        menuOverlayBlack.classList.toggle('open');
    });
  };
  
  