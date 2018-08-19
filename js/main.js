// Fade in title


$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 140 ){
    
 		$('.scroll-fade').addClass('show');
    
  } else {
    
    $('.scroll-fade').removeClass('show');
    
 	};   	
}); 




// Template for using functions


$( document ).ready(function() {
    
    // when dom is ready do stuff
    
    testDocReady();
});

function testDocReady() {
    
    console.log('doc ready');
}