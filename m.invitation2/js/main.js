//禁止下拉
// var overscroll = function (el) {
// 	el.addEventListener('touchstart', function () {
// 		var top = el.scrollTop
// 			, totalScroll = el.scrollHeight
// 			, currentScroll = top + el.offsetHeight
// 		//If we're at the top or the bottom of the containers
// 		//scroll, push up or down one pixel.
// 		//
// 		//this prevents the scroll from "passing through" to
// 		//the body.
// 		if (top === 0) {
// 			el.scrollTop = 1
// 		} else if (currentScroll === totalScroll) {
// 			el.scrollTop = top - 1
// 		}
// 	})
// 	el.addEventListener('touchmove', function (evt) {
// 		//if the content is actually scrollable, i.e. the content is long enough
// 		//that scrolling can occur
// 		if (el.offsetHeight < el.scrollHeight)
// 			evt._isScroller = true
// 	})
// }
// overscroll(document.querySelector('.body'));
// document.body.addEventListener('touchmove', function (evt) {
// 	//In this case, the default behavior is scrolling the body, which
// 	//would result in an overflow.  Since we don't want that, we preventDefault.
// 	if (!evt._isScroller) {
// 		evt.preventDefault()
// 	}
// })


// var imgurl = [];



// setInterval(function () {
// 	$(".shadow_an").css({ opacity: '0' }).animate({ opacity: '1' }, "normal", "linear");
// }, 1500)











// function openmusic2() {
// 	autoPlayMusic2();
// 	audioAutoPlay2();
// }

// function pauseAuto2() {
// 	var audio = document.getElementById('bg-music2');
// 	audio.pause();
// }

// function audioAutoPlay2() {
// 	var audio = document.getElementById('bg-music2');
// 	audio.play();
// 	document.addEventListener("WeixinJSBridgeReady", function () {
// 		audio.play();
// 	}, false);
// }
// // 音乐播放
// function autoPlayMusic() {
// 	// 自动播放音乐效果，解决浏览器或者APP自动播放问题
// 	function musicInBrowserHandler() {
// 		musicPlay2(true);
// 		document.body.removeEventListener('touchstart', musicInBrowserHandler);
// 	}
// 	document.body.addEventListener('touchstart', musicInBrowserHandler);
// 	// 自动播放音乐效果，解决微信自动播放问题
// 	function musicInWeixinHandler() {
// 		musicPlay2(true);
// 		document.addEventListener("WeixinJSBridgeReady", function () {
// 			musicPlay2(true);
// 		}, false);
// 		document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
// 	}
// 	document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
// }
// function musicPlay2(isPlay) {
// 	var media = document.getElementById('bg-music2');
// 	if (isPlay && media.paused) {
// 		media.play();
// 	}
// 	if (!isPlay && !media.paused) {
// 		media.pause();
// 	}
// }


