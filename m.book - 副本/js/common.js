<!DOCTYPE html>
<html lang="en">

<head>
    <title>首页</title>
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1, minimum-scale=1">
    <link href="css/swiper.min.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="css/reset.css" />
    <link rel="stylesheet" type="text/css" href="css/animate.css" />
    <link rel="stylesheet" type="text/css" href="css/common.css" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <style>
    </style>
</head>

<body>
    <!-- 签到 -->
    <div class="layer animated">
        <div class="layer_cover"></div>
        <div class="layer_main">
            <div class="layer_main_cover">
                <img src='images/sign_bg.png' class="layer_main_cover_bgpic">
                <div class="layer_content">
                    <div class="total_day">已累计签到
                        <span class="day_num">8 </span>天</div>
                    <div class="sign_tip">签到多多，奖励多多</div>
                    <div class="sign_day_list">
                        <div class="has_day">
                            <div class="day_num">1</div>
                            <img src='images/sign_gold.png' class="sign_gold">
                            <img src='images/sign_success.png' class="sign_success">
                        </div>
                        <div class="out_day">
                            <div class="day_num">2</div>
                            <img src='images/sign_gold.png' class="sign_gold">
                            <div class="out_day_txt">漏签</div>
                        </div>
                        <div class="cur_day">
                            <div class="day_num">3</div>
                            <img src='images/sign_gold.png' class="sign_gold">
                        </div>
                        <div>
                            <div class="day_num">4</div>
                            <img src='images/sign_gold.png' class="sign_gold">
                        </div>
                        <div>
                            <div class="day_num">5</div>
                            <img src='images/sign_gold.png' class="sign_gold">
                        </div>
                        <div>
                            <div class="day_num">6</div>
                            <img src='images/sign_gold.png' class="sign_gold">
                        </div>
                        <div>
                            <div class="day_num">7</div>
                            <img src='images/sign_gold.png' class="sign_gold">
                        </div>
                    </div>
                    <div>累计签到送大礼</div>
                    <div class="total_day_list">
                        <div>
                            <div class="total_day_list_box">
                                <img src='images/sign_quan.png' class="sign_quan">
                                <div>100书券</div>
                            </div>
                            <div class="txt">已领取</div>
                        </div>
                        <div>
                            <div class="total_day_list_box">
                                <img src='images/sign_curquan.png' class="sign_quan">
                                <div>100书券</div>
                            </div>
                            <div class="txt">已领取</div>
                        </div>
                        <div>
                            <div class="total_day_list_box">
                                <img src='images/sign_curquan.png' class="sign_quan">
                                <div>100书券</div>
                            </div>
                            <div class="txt">已领取</div>
                        </div>
                        <div>
                            <div class="total_day_list_box">
                                <img src='images/sign_curquan.png' class="sign_quan">
                                <div>100书券</div>
                            </div>
                            <div class="txt">已领取</div>
                        </div>
                    </div>
                    <div class="layer_btn_group">
                        <button class="signBtn">立即签到</button>
                    </div>
                </div>
            </div>
            <a href="javascript:;" class="closeSign">
                <img class="layer_close" src='images/sign_close.png'>
            </a>
        </div>
    </div>
    <!-- 目录 -->
    <div class="main_mlwrap" catchtouchmove="myCatchTouch">
        <div class="cover closeMl"></div>
        <div class="ml_list animated">
            <div class="active">第一章：死亡游戏</div>
            <div>第二章：死亡游戏</div>
            <div>第二章：死亡游戏</div>
            <div>第二章：死亡游戏</div>
            <div>第二章：死亡游戏</div>
            <div>第二章：死亡游戏</div>
            <div>第二章：死亡游戏</div>
            <div>第二章：死亡游戏</div>
            <div>第三章：死亡游戏</div>
            <div>第四章：死亡游戏</div>
            <div>第五章：死亡游戏</div>
            <div>第五章：死亡游戏</div>
            <div>第五章：死亡游戏</div>
            <div>第五章：死亡游戏</div>
            <div>第五章：死亡游戏</div>
            <div>第五章：死亡游戏</div>
            <div>第五章：死亡游戏</div>
            <div>第五章：死亡游戏</div>
            <div>第五章：死亡游戏</div>
            <div>第二章：死亡游戏</div>
            <div>第二章：死亡游戏</div>
            <div>第二章：死亡游戏</div>
            <div>第二章：死亡游戏</div>
        </div>
    </div>
    <!-- 内容 -->
    <div class="main">
        <div class="main_book_intro">
            <div class="book_cover">
                <img src='images/book_cover.png'>
            </div>
            <div class="book_name">暗界神使</div>
            <div class="book_author">火红森林</div>
            <div class="book_intro unfold">
                <span>大学毕业生姜爻在追查友人失踪案件中,意外得知自己本应在十年前就已死去的事实..</span>
                <div class="icon_unfold">
                    <img src='images/icon_unfold.png'>
                </div>
            </div>
        </div>
        <div class="main_piece clearfix">
            <div class="fl" >
                <a href="javascript:;" class="openMl">
                    <img src='images/icon_ml.png' class="icon_ml">
                    <div class="txt">查看目录</div>
                </a>
            </div>
            <div class="fl openSign">
                <img src='images/icon_sign.png' class="icon_sign">
                <div class="txt">签到领书券</div>
            </div>
        </div>
    </div>
    <!-- 底部导航 -->
    <div class="main_nav">
        <div class="nav_group clearfix">
            <div class="fl goBookQuan">
                <img src='images/icon_msg.png' class="icon_myshuq">
                <div class="txt">我的书圈</div>
            </div>
            <div class="fl goReadingBook">
                <div class="txt">免费阅读</div>
            </div>
            <div class="fl goPerson">
                <img src='images/icon_user.png' class="icon_myinfo">
                <div class="txt">个人中心</div>
            </div>
        </div>
    </div>
    <!-- <nav class="main_nav">
        <div class="nav_group clearfix">
            <a class="fl" onclick="changFont(0)">
                <span class="icon icon_myshuq"></span>
                <p>我的书圈</p>
            </a>
            <a class="fl ">
                <p>目录</p>
            </a>
            <a class="fl" onclick="changFont(1)">
                <span class="icon icon_myinfo"></span>
                <p>个人中心</p>
            </a>
        </div>
    </nav> -->
    <!--     
    <nav class="main_nav hide">
        <div class="nav_group clearfix">
            <a class="fl" onclick="changFont(0)">
                <span class="icon icon_myshuq"></span>
                <p>我的书圈</p>
            </a>
            <a class="fl openMenu">
                <p>免费阅读</p>
            </a>
            <a class="fl" onclick="changFont(1)">
                <span class="icon icon_myinfo"></span>
                <p>个人中心</p>
            </a>
        </div>
    </nav>
    <nav id="menu" class="menu">
        <a href="javascript:;">第一章 朝气蓬勃</a>
        <a href="javascript:;">第二章 骨文</a>
        <a href="javascript:;">第三章 祭灵</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
        <a href="javascript:;">第四章 药浴</a>
    </nav>

    <main id="panel" class="panel">
        <section class="book_con">
            <p>祭台以巨石砌成，很开阔，紧邻折断的老柳树而建，此时上面堆积满了猛兽，如同一座小山似的。</p>
            <p>鲜红的兽血染红了巨石台，沿着石面上的刻图而淌，红艳艳，加之巨兽粗长的兽毛、寒光闪烁的鳞片以及狰狞的巨角等，触目惊心，有一种惨烈的洪荒气息扑面而来。</p>
            <p>在老族长的带领下，石村的男女老少一起祷告，请求柳木庇护，这是一场严肃的祭祀过程，而这也是一种惯例，每次狩猎回来都要进行。</p>
            <p>焦黑的树体如同过去一样寂静，并没有一点反应，一如往日不曾取用祭品，但是很多村人却知道，它有灵！</p>
            <p>终于，祭祀完毕，人们都长出了一口气，重新浮上了喜悦的笑容，开始搬这些猛兽的尸体，准备去放血、切割。</p>
            <p>“很多年了，祭灵都没有动过一次供品，还需要每次都进行祭祀吗？”一个少年小声咕哝。</p>
            <p>“臭小子你乱说什么！”他的父亲怒瞪铜铃大眼，抡起蒲扇大的手就要揍他。</p>
        </section>

    </main> -->
    <script src="js/jquery-1.8.0.min.js"></script>
    <!-- <script src="js/zepto.min.js"></script> -->
    <!-- 侧滑插件 -->
    <!-- <script src="dist/slideout.min.js"></script> -->
    <script type="text/javascript" src="js/common.js"></script>
    <!-- <script type="text/javascript" src="js/rem.js"></script> -->
    <!-- 侧滑插件 -->
    <script>
        $(function(){
            alert(222222222333323)
        })
    </script>
</body>

</html>
