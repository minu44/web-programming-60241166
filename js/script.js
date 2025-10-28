$(document).ready(function () {
  console.log("check");

  setTimeout(function () {
    $(".g_stroke").addClass("g");
    $(".r_stroke").addClass("r");
    $(".v_stroke").addClass("v");
    $(".i_stroke").addClass("i");
    $(".t_stroke").addClass("t");
    $(".y_stroke").addClass("y");
    $(".astronaut").css("opacity", 1);
  }, 4500);

  setTimeout(function () {
    $(".rope, .signal").css("opacity", 1);
    $(".red_light").css("filter", "opacity(1)");
  }, 5000);

  $(".a").on("mouseenter", function () {
    $(".a").css("filter", "opacity(0.5) blur(5px)");
  });
  $(".a").on("mouseleave", function () {
    $(".a").css("filter", "opacity(0) blur(5px)");
  });

  var spinning = false;

  $(".a").on("mousedown", function () {
    spinning = true;
    $(".a").css("filter", "opacity(1) blur(0px)").css("cursor", "grabbing");
    $(
      ".background_solid, .background_spin_01, .background_spin_02, .earth_spin"
    ).css("opacity", 1);
    $(".g, .r, .v, .i, .t, .y").css("animation-play-state", "paused");
    $(
      ".astronaut, .rope, .red_light, .signal, .spaceship, .bullock, .cuaron, .clooney, .cursor, .copy_1, .copy_2"
    ).css("filter", "opacity(0) blur(50px)");
    if (cursor_clicked == true) {
      $(".cl-1").removeClass("ca1_typing");
      $(".cl-2").removeClass("ca2_typing");
      $(".cl-3").removeClass("ca3_typing");
      $(".cl-4").removeClass("ca4_typing");
      $(".cl-i").removeClass("cb1_typing");
    }
  });
  $(".a").on("mouseup", function () {
    spinning = false;
    $(".a").css("filter", "opacity(0.5) blur(5px)").css("cursor", "grab");
    $(
      ".background_solid, .background_spin_01, .background_spin_02, .earth_spin"
    ).css("opacity", 0);
    $(".g, .r, .v, .i, .t, .y").css("animation-play-state", "running");
    $(
      ".astronaut, .rope, .red_light, .signal, .spaceship, .bullock, .cuaron, .clooney, .cursor, .copy_1, .copy_2"
    ).css("filter", "opacity(1) blur(0px)");
    if (cooldown == false) {
      $(".red_light").css("filter", "opacity(1)").css("cursor", "pointer");
    }
    if (cursor_clicked == true) {
      $(".cursor").css("filter", "opacity(1)").css("cursor", "pointer");
      cursor_clicked = false;
    }
  });

  var light_clicked = false;
  var cooldown = false;

  $(".red_light").on("click", function () {
    if (cooldown == true) {
      return;
    }

    if (light_clicked == false) {
      $(".spaceship").addClass("spaceship_appear").css("opacity", 1);
      light_clicked = true;
    } else {
      $(".spaceship").addClass("spaceship_goaway");
      $(".red_light").css("filter", "opacity(0)").css("cursor", "default");
      light_clicked = false;
      cooldown = true;

      setTimeout(function () {
        $(".spaceship")
          .removeClass("spaceship_appear spaceship_goaway")
          .css("opacity", 0);
      }, 5000);

      setTimeout(function () {
        cooldown = false;
        if (spinning == false) {
          $(".red_light").css("filter", "opacity(1)").css("cursor", "pointer");
        }
      }, 10000);
    }
  });

  var cursor_clicked = false;

  $(".cursor").on("click", function () {
    if (cursor_clicked == false) {
      $(".cursor").css("filter", "opacity(0)").css("cursor", "default");
      $(".cl-1").addClass("ca1_typing");
      $(".cl-2").addClass("ca2_typing");
      $(".cl-3").addClass("ca3_typing");
      $(".cl-4").addClass("ca4_typing");
      $(".cl-i").addClass("cb1_typing");
      cursor_clicked = true;
    }
  });
});
