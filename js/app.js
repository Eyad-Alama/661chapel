var winHeight = $(window).height();
var winHWidth = $(window).width();
var imgSlider = $('#img-slider li');
function recalcScrnsz() {
	imgSlider.css({
		height: winHeight,
		width: winHWidth
	});
};
$(document).ready(recalcScrnsz);
$(window).resize(function(){
	imgSlider.css({
		height: ($(window).height()),
		width: ($(window).width())
	})
});

$(window).on('load', function () {
  var count = $("#img-slider > li").length
  var slider = 1
  var speed=5000
  var fadeSpeed = 500
  var loop 
  start()
  $("#1").fadeIn(fadeSpeed - 200);
  
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
    $("#" + slider).fadeIn(fadeSpeed - 200)
  }

  function next() {
    slider++
    if (slider > count) {
        slider = 1
    }
    $("#img-slider > li").fadeOut(fadeSpeed)
    $("#" + slider).fadeIn(fadeSpeed - 200)
  }
});

$(document).ready(function() {
	var bodyClass =  $('body').attr('class');
	// var imgUrl = window.location.origin + ('/images/');
	var imgUrl =  ('https://dl.dropboxusercontent.com/u/3421451/images/')
	var i = 0;
	$(imgSlider).each(function() {
		i++;
		$(this).css('background-image', 'url("' + imgUrl + 'img-'  + bodyClass + '-' + i + '.jpg")');
	});
	if ($(window).width() < 767) {
		var i = 0;
		$(imgSlider).each(function() {
			i++;
			$(this).css('background-image', 'url("' + imgUrl + 'xs-'  + bodyClass + '-' + i + '.jpg")');
		});
	}
});