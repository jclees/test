window.onload = function () {
	var imgurl = ['images/page_bg_02.png', 'images/page_bg_03.png', 'images/page_bg_04.png', 'images/page_bg_05.png', 'images/page_bg_06.png', 'images/page_bg_07.png']
	$("img").each(function (i, t) {
		imgurl.push($("img").eq(i).attr("src"))
	})
	console.log(imgurl)
	var callbacks = [];
	imgLoader(imgurl, function (percentage) {
		var i = callbacks.length;
		callbacks.push(function () {
			setTimeout(function () {
				var percentT = percentage * 100;
				if (percentage == 1) {
					setTimeout(function () {
						$('.page1').hide().next().show();
					}, 100);
				}
				$('.loading_box .txt').html((parseInt(percentT)) + ' %');
				callbacks[i + 1] && callbacks[i + 1]();
			}, 100);
		});
		if (percentage == 1) {
			callbacks[0]();
		}
	});
}
// 显示隐藏打开分享
$(".openShare").on("click", function () {
	$(".share").show()
})
$(".cover").on("click", function () {
	$(".share").hide()
})
//保存邀请函
$(".openDown").on("click", function () {
	alert("长按图片保存 邀请函")
})
//按钮放大缩小动画
$(".anm_pulse").addClass("animated pulse infinite");

//滑动跳转到下一个页面
var startX, startY;
function GetSlideDirection(startX, startY, endX, endY) {
	var dy = startY - endY;
	//var dx = endX - startX;
	var result = 0;
	if (dy > 0) {//向上滑动
		result = 1;
	} else if (dy < 0) {//向下滑动
		result = 2;
	}
	else {
		result = 0;
	}
	return result;
}
document.addEventListener('touchstart', function (ev) {
	startX = ev.touches[0].pageX;
	startY = ev.touches[0].pageY;
}, false);
document.addEventListener('touchend', function (ev) {
	if ($('.page4').css('display') == 'none' && $('.page3').css('display') == 'none') {
		return
	}
	var endX, endY;
	endX = ev.changedTouches[0].pageX;
	endY = ev.changedTouches[0].pageY;
	var direction = GetSlideDirection(startX, startY, endX, endY);
	switch (direction) {
		case 0:
			// alert("无操作");
			break;
		case 1:
			// 向上
			// alert("up");
			if ($('.page3').css('display') == 'none') {
				console.log(111111111111)
				$(".page").hide()
				$(".page5").addClass("animated fadeIn").show();
				return;
			}
			if ($('.page4').css('display') == 'none') {
				console.log(222222222222)
				$(".page").hide()
				$(".page4").addClass("animated fadeIn").show();
				return;
			}

			break;
		case 2:
			// 向下
			// alert("down");
			break;

		default:
	}
}, false);