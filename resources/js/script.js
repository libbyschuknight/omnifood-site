$(document).ready(function () {
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });


  // var waypoints = $('#handler-first').waypoint(function(direction) {
  //   notify(this.element.id + ' hit 25% from top of window')
  // }, {
  //   offset: '25%'
  // })


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
