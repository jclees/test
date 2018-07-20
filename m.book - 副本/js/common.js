(function () {
    // slideMenu()
    // scrollTop()
})()
var styleFlag = true
function slideMenu() {
    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
    });
    $(".openMenu").on('click', function () {
        slideout.open();
        setTimeout(function () {
            $(".panel").addClass("clolsemenu")
        }, 500)
        $('.hide').hide()
    })
    $("body").on('click', '.clolsemenu', function () {
        slideout.close();
        $(".clolsemenu").removeClass('clolsemenu')
        $('.hide').show()
    });
    slideout.disableTouch();
}
// function scrollTop(imgUrl) {
//     $('.scroll_top').remove()
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop()
//         if (scroll > 200) {
//             $('.scroll_top').remove()
//             var newHtml = '<section class="scroll_top"><img src="' + imgUrl + '" /></section>'
//             $('body').append(newHtml)
//         } else {
//             $('.scroll_top').remove()
//         }
//         $('.scroll_top').on('click', function () {
//             $('body,html').animate({ scrollTop: 0 }, 500);
//         })
//     })
// }

$(".signBtn").on("click", function () {
    $(this).addClass('active')
 })
 $(".unfold").on("click", function () {
     var tempintro = $(this).children("span").text()
     var intro = tempintro.substring(0,37)
     console.log(intro)
 })
 $(".openSign").on("click", function () {
     // $(".layer").addClass("fadeIn")
     // setTimeout(() => {
         $(".layer").show()
     // }, 300);
 })
 $(".closeSign").on("click", function () {
     // $(".layer").addClass("fadeOut")
     // setTimeout(() => {
         $(".layer").hide()
     // }, 300);
 })
 $(".goReadingBook").on("click", function () {
     window.location.href = 'readingbook.html'
 })
 $(".goBookQuan").on("click", function () {
     window.location.href = 'mybookquan.html'
 })
 $(".openMl").on("click", function () {
     $(".ml_list").removeClass("slideOutLeft").addClass("slideInLeft")
     setTimeout(() => {
         $(".main_mlwrap").show()
     }, 300);
 })
 $(".closeMl").on("click", function () {
     $(".ml_list").removeClass("slideInLeft").addClass("slideOutLeft")
     setTimeout(() => {
         $(".main_mlwrap").hide()
     }, 300);
 })
 $(".openSet").on("click", function () {
     $(".set_con").removeClass("slideOutDown").addClass("slideInUp")
     setTimeout(() => {
         $(".set_wrap").show()
     }, 300);
 })
 $(".closeSet").on("click", function () {
     $(".set_con").removeClass("slideInUp").addClass("slideOutDown")
     setTimeout(() => {
         $(".set_wrap").hide()
     }, 300);
 })
 $(".openPlmsg").on("click", function () {
     $(".plmsg_con").removeClass("slideOutDown").addClass("slideInUp")
     setTimeout(() => {
         $(".plmsg_wrap").show()
     }, 300);
 })
 $(".closePlmsg").on("click", function () {
     $(".plmsg_con").removeClass("slideInUp").addClass("slideOutDown")
     setTimeout(() => {
         $(".plmsg_wrap").hide()
     }, 300);
 })
 $(".openLookplWrap").on("click", function () {
     $(".lookpl_plbtn").slideDown()
     $(".lookpl_wrap").removeClass("slideOutDown").addClass("slideInUp")
     setTimeout(() => {
         $(".lookpl_wrap").show()
     }, 300);
 })
 $(".closeLookplWrap").on("click", function () {
     $(".lookpl_plbtn").hide()
     $(".lookpl_wrap").removeClass("slideInUp").addClass("slideOutDown")
     setTimeout(() => {
         $(".lookpl_wrap").hide()
     }, 300);
 })
 $(".changeFont").on("click", function () {
     var id = $(this).attr('data-id')
     //获取para的字体大小
     var thisEle = $(".book_con > p").css("font-size");
     //parseFloat的第二个参数表示转化的进制，10就表示转为10进制
     var textFontSize = parseFloat(thisEle, 10);
     //javascript自带方法
     var unit = thisEle.slice(-2); //获取单位
     if (id == 0) {
         if (textFontSize == 12) {
             return false
         }
         textFontSize -= 2;
 
     } else if (id == 1) {
         if (textFontSize == 24) {
             return false
         }
         textFontSize += 2;
     }
     //设置para的字体大小
     $(".book_con > p").css("font-size", textFontSize + unit);
 })
 $(".changeNight").on("click", function () {
     if(styleFlag){
         $(".skin").addClass("dark-box")
         $(".set_con").removeClass("slideInUp").addClass("slideOutDown")
          setTimeout(() => {
              $(".set_wrap").hide()
          }, 300);
          styleFlag= false
     }else{
         $(".skin").removeClass("dark-box")
         $(".set_con").removeClass("slideInUp").addClass("slideOutDown")
          setTimeout(() => {
              $(".set_wrap").hide()
          }, 300);
         styleFlag= true
     }
    
 })
 $(".bookq_tabs > a").on("click", function () {
     var index = $(this).index()
     $(this).addClass("active").siblings().removeClass("active")
     $(".bookq_con > div").eq(index).show().siblings().hide()
 })
 
 $(window).scroll(function () {
     // $(".set_con").removeClass("slideInUp").addClass("slideOutDown")
     // setTimeout(() => {
     //     $(".set_wrap").hide()
     // }, 300);
 })
 //滚动时保存滚动位置
 // $(window).scroll(function(){
 //     if($(document).scrollTop()!=0){
 //       sessionStorage.setItem("offsetTop", $(window).scrollTop());
 //     }
 //   });
 //   //onload时，取出并滚动到上次保存位置
 //   window.onload = function(){
 //     var offset = sessionStorage.getItem("offsetTop");
 //     $(document).scrollTop(offset);
 //   };
