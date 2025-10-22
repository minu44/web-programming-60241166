$(document).ready(function () {
  console.log("check");

  $(".a").on("mouseenter", function () {
    $(".a").addClass("a_hover");
  });
  $(".a").on("mouseleave", function () {
    $(".a").removeClass("a_hover");
  });
  $(".a").on("mousedown", function () {
    $(".a").addClass("a_hold");
    $(".space").addClass("space_paused");
    $(".earth").addClass("earth_paused");
  });
  $(".a").on("mouseup", function () {
    $(".a").removeClass("a_hold");
    $(".space").removeClass("space_paused");
    $(".earth").removeClass("earth_paused");
  });

  var light_clicked = false;

  $(".red_light").on("click", function () {
    if (light_clicked == false) {
      $(".spaceship").addClass("spaceship_appear");
      light_clicked = true;
    } else {
      $(".spaceship").removeClass("spaceship_appear");
      light_clicked = false;
    }
  });
});
