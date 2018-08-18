//shrink title

$(function() {

  $(window).scroll(function() {

    var mass = Math.max(20, 70-0.4*$(this).scrollTop()) + 'px';

    $('.articleTitle').css({'font-size': mass});
  });
});



//fade in title

$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
	if ($(window).scrollTop() > 160 ){
    
 		$('.scroll-fade').addClass('show');
    
  } else {
    
    $('.scroll-fade').removeClass('show');
    
 	};   	
}); 