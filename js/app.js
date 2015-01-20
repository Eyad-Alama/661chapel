var winHeight = $(window).height();
var winHWidth = $(window).width();
var imgSlider = $('#img-slider li');
$(document).ready(recalcScrnsz);
$(window).resize(recalcScrnsz);
function recalcScrnsz() {
	imgSlider.height(winHeight);
	imgSlider.width(winHWidth);
};

$(function () {
  var count = $("#img-slider > li").length
  var slider = 1
  var speed=5000
  var fadeSpeed = 300
  var loop 
  start()
  $("#1").fadeIn(fadeSpeed);
  
  function start(){
    loop = setInterval(next, speed)
  }
  function stop(){
    clearInterval(loop)
  }

  function prev() {
    slider--
    if (slider < 1) {
        slider = count
    }
    $("#img-slider > li").fadeOut(fadeSpeed)
    $("#" + slider).fadeIn(fadeSpeed)
  }

  function next() {
    slider++
    if (slider > count) {
        slider = 1
    }
    $("#img-slider > li").fadeOut(fadeSpeed)
    $("#" + slider).fadeIn(fadeSpeed)
  }
});