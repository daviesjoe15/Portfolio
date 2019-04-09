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



// Tabbed images

  var slideIndex = 1;
    show1Slides(slideIndex);

    function plusSlides(n) {
      show1Slides(slideIndex += n);
    }

    function currentSlide(n) {
      show1Slides(slideIndex = n);
    }

    function show1Slides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides", "mySlides2");
      var dots = document.getElementsByClassName("image-tab");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }