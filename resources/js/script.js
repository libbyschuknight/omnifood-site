$(document).ready(function () {
  // For the sticky navigation
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

  // Scroll on buttons
  $('.js--scroll-to-plan').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-plans').offset().top }, 1000);
  });

  $('.js--scroll-to-start').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-features').offset().top }, 1000);
  });

  // Navigation - scroll to - old jquery? still works
  // $(function () {
  //   $('a[href*="#"]:not([href="#"])').click(function () {
  //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  //       var target = $(this.hash);
  //       target = target.length ? target : $('[name=]' + this.hash.slice(1) + ']');
  //       if (target.length) {
  //         $('html, body').animate({
  //           scrollTop: target.offset().top
  //         }, 1000);
  //         return false
  //       }
  //     }
  //   });
  // });


// Smooth Scroll with jQuery - newer than above
// https://css-tricks.com/snippets/jquery/smooth-scrolling/

  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  // Animations on scroll
  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '80%'
  });

  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });


  // Mobile navigation
  // New code from https://jsfiddle.net/d83ykzku/1/
  $('.js--nav-icon, .js--main-nav a, .logo-black').click(function (element) {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    //Gets the class name of the element that triggered the event
    var clicked = element.target.className;

    //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
    if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
      return;

    //Opens and closes the menu
    if ($(window).width() < 768) {
      nav.slideToggle(200);
    }

    //Changes icon states of the menu button
    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });


  $(window).resize(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    if ($(window).width() > 767) {
      nav.css("display", "block");
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      nav.css("display", "none");
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }

  });
  // OLD CODE from tutorial
  // $('.js--nav-icon').click(function() {
  //   var nav = $('.js--main-nav');
  //   var icon = $('.js--nav-icon i');
  //   nav.slideToggle(200);
  //   if (icon.hasClass('ion-navicon-round')) {
  //     icon.addClass('ion-close-round');
  //     icon.removeClass('ion-navicon-round');
  //   } else {
  //     icon.addClass('ion-navicon-round');
  //     icon.removeClass('ion-close-round');
  //   };
  // });

});


// Simple jquery and how to do in vanilla js

// jQuery
// $(document).ready(function () {
//
//   $("h2").click(function () {
//     $(this).css("background-color", "#ff0000");
//   });
//
//
// });

// Vanilla
// document.addEventListener('DOMContentLoaded', function() {
//   [].forEach.call(document.querySelectorAll('h2'), function(el) {
//     el.addEventListener('click', function() {
//       el.style.backgroundColor = '#ff0000';
//     })
//   })
// })
