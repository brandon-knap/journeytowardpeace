// Hide/Show

function mobileMenuToggle() {
    var x = document.getElementById('main-menu-mobile');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
// Sticky Header
$(window).scroll(function(){
         var sticky = $('#sticky_header'),
         scroll = $(window).scrollTop();
        if (scroll >= 400){
            sticky.addClass('fixed');
            sticky.slideDown(300);
        }else{
            sticky.removeClass('fixed');
            sticky.removeAttr("style"); //slideDown adds the style="block" which needs to be removed so that next time slideDown will work
        }
    });

// Smooth In-page scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Basic Accordion

$(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');

    });
  });