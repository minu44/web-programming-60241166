$(document).ready(function () {
  console.log("제이쿼리 로드 완료");

  $(".a").on("mouseenter", function () {
    $(".a").addClass("a_hover");
  });
  $(".a").on("mouseleave", function () {
    $(".a").removeClass("a_hover");
  });
  $(".a").on("mousedown", function () {
    $(".a").addClass("a_hold");
  });
  $(".a").on("mouseup", function () {
    $(".a").removeClass("a_hold");
  });
});
