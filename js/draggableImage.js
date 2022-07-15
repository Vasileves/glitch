window.onload = function(){ 
  setTimeout(function (params) {
    $(".draggable").addClass("removed")
  },700)

  setTimeout(function (params) {
    $(".draggableO").addClass("removed")
  },700)

  $(function() {
    $( "#draggable" ).draggable({stack: 'div'});
    $('#draggable').addClass('shadow');

  });

    $(function() {
	$( "#draggable2" ).draggable({stack: 'div'});
	$('#draggable2').addClass('shadow');

  });

  $(function() {
    $( "#draggable3" ).draggable({stack: 'div'});
    $('#draggable3').addClass('shadow');
  
    });

  $(function() {
    $( "#draggable4" ).draggable({stack: 'div'});
    $('#draggable4').addClass('shadow');
  
    });
  $(function() {
    $( "#draggable5" ).draggable({stack: 'div'});
    $('#draggable5').addClass('shadow');

  });

  $(function() {
    $( "#draggable5_0" ).draggable({stack: 'div'});
    $('#draggable5_0').addClass('shadow');

  });

  $(function() {
    $( "#draggable6_0" ).draggable({stack: 'div'});
    $('#draggable6_0').addClass('shadow');

  });

  $(function() {
    $( "#draggable7_0" ).draggable({stack: 'div'});
    $('#draggable7_0').addClass('shadow');

  });

  $(function() {
    $( "#draggable8_0" ).draggable({stack: 'div'});
    $('#draggable8_0').addClass('shadow');

  });

    $(function() {
	$( "#draggable6" ).draggable({stack: 'div'});
	$('#draggable6').addClass('shadow');

  });

  $(function() {
    $( "#draggable7" ).draggable({stack: 'div'});
    $('#draggable7').addClass('shadow');
  
    });

  $(function() {
    $( "#draggable8" ).draggable({stack: 'div'});
    $('#draggable8').addClass('shadow');
  
    });
    
  $(function() {
    $( "#draggable9" ).draggable({stack: 'div'});
    $('#draggable9').addClass('shadow');

  });

    $(function() {
  $( "#draggable10" ).draggable({stack: 'div'});
  $('#draggable10').addClass('shadow');

  });

  $(function() {
    $( "#draggable11" ).draggable({stack: 'div'});
    $('#draggable11').addClass('shadow');
  
    });

  $(function() {
  $( "#draggable12" ).draggable({stack: 'div'});
  $('#draggable12').addClass('shadow');

  });

  $(function() {
    $( "#draggable13" ).draggable({stack: 'div'});
    $('#draggable13').addClass('shadow');

  });

    $(function() {
	$( "#draggable14" ).draggable({stack: 'div'});
	$('#draggable14').addClass('shadow');

  });

  $(function() {
    $( "#draggable15" ).draggable({stack: 'div'});
    $('#draggable15').addClass('shadow');
  
    });

  $(function() {
    $( "#draggable16" ).draggable({stack: 'div'});
    $('#draggable16').addClass('shadow');
  
    });
  $(function() {
    $( "#draggable17" ).draggable({stack: 'div'});
    $('#draggable17').addClass('shadow');

  });

    $(function() {
	$( "#draggable18" ).draggable({stack: 'div'});
	$('#draggable18').addClass('shadow');

  });

  $(function() {
    $( "#draggable19" ).draggable({stack: 'div'});
    $('#draggable19').addClass('shadow');
  
    });

  $(function() {
    $( "#draggable20" ).draggable({stack: 'div'});
    $('#draggable20').addClass('shadow');
  
    });
    
  $(function() {
    $( "#draggable21" ).draggable({stack: 'div'});
    $('#draggable21').addClass('shadow');

  });

    $(function() {
  $( "#draggable22" ).draggable({stack: 'div'});
  $('#draggable22').addClass('shadow');

  });

  $(function() {
    $( "#draggable23" ).draggable({stack: 'div'});
    $('#draggable23').addClass('shadow');
  
    });

  $(function() {
  $( "#draggable24" ).draggable({stack: 'div'});
  $('#draggable24').addClass('shadow');

  });

  $(function() {
    $( "#draggable25" ).draggable({stack: 'div'});
    $('#draggable25').addClass('shadow');
  
    });
    
  $(function() {
    $( "#draggable26" ).draggable({stack: 'div'});
    $('#draggable26').addClass('shadow');

  });

    $(function() {
  $( "#draggable27" ).draggable({stack: 'div'});
  $('#draggable27').addClass('shadow');

  });

  $(function() {
    $( "#draggable28" ).draggable({stack: 'div'});
    $('#draggable28').addClass('shadow');
  
    });

    
  $(function() {
    $( "#draggableO" ).draggable({stack: 'div'});
    $('#draggableO').addClass('shadow');
    
     });
  $(function() {
    $( "#draggableO2" ).draggable({stack: 'div'});
    $('#draggableO2').addClass('shadow');
    
     });

  $(function() {
    $( "#draggableO3" ).draggable({stack: 'div'});
    $('#draggableO3').addClass('shadow');
    
     });

     
      'use strict';
  
  const menuButtonBlack = document.querySelector('.menu-buttonBlack');
  const menuOverlayBlack = document.querySelector('.menu-overlayBlack');
  
  
  menuButtonBlack.addEventListener('click', function() {
      menuButtonBlack.classList.toggle('active');
      menuOverlayBlack.classList.toggle('open');
  });
};

