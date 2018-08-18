//fade in title

$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 140 ){
    
 		$('.scroll-fade').addClass('show');
    
  } else {
    
    $('.scroll-fade').removeClass('show');
    
 	};   	
}); 