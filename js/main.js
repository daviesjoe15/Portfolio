// Template for using functions

$(document).ready(function () {
    
    // when dom is ready do stuff
    
    testDocReady();
});

function testDocReady() {
    
    console.log('doc ready');
}

    
// Fade in title

$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    
    if (scroll > 140) {
        $(".scroll-fade").addClass("show");
    }
    else {
        $(".scroll-fade").removeClass("show");
    }
    
     if (scroll > 140) {
        $(".navbar").addClass("active");
    }
    else {
        $(".navbar").removeClass("active");
    }
    
});




//$('.collapse').collapse()


//function initReadMoreLinks() {
//
//  $('.read-more').click(function(){
//      var $this = $(this);
//      $this.toggleClass('read-more');
//      if($this.hasClass('read-more')){
//          $this.text('Read more');         
//      } else {
//          $this.text('Read less');
//      }
//  });
//}
//

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}







// Tabbed images

  var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
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
    


