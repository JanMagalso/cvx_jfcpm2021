//ページトップに戻る
$(document).ready(function(){
		var video = document.querySelector(".open-default1");
		video.onclick = function(){
			event.preventDefault();
			$('#modal-default1').iziModal('open');
			$('#modal-default1 .c_modal_content div').find('video').get(0).play();
		};
		$('#modal-default1').iziModal({
			width: 800,
			restoreDefaultContent: true
		});
})
$(function() {
	var dHeight = $(document).height();
	var wHeight = $(window).height();
	var divHeight = $('.l_footer_area').height();
	var x = dHeight - divHeight;
	var topBtn = $('.top_btn');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
			if ($(this).scrollTop() < (x - wHeight)) {
			$('.l_pagetop').addClass("fixed");
			}
			else if ($(this).scrollTop() > (x - wHeight)) {
			$('.l_pagetop').removeClass("fixed");
			}
		} else {
			topBtn.fadeOut();
		}
	});
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
    });
});
//カレント設定
$(function() {
	var id = $("body").attr("id");
	$("li." + id).addClass("active");
});
