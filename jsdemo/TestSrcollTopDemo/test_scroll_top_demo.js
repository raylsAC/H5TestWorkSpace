/**
 * Created by zhangzhuokui on 2018/3/28.
 */

window.onload = function () {
    var top_h = $(".top")[0].offsetHeight;
    var nav = $("#nav");
    var adv_left = $("#left_adv");
    var adv_right = $("#right_adv");
    var backToTop = $("#back_to_top");
    var navList = $("#nav").children[0].children;
    var contentList = $("#content").children[0].children;
    var bgColor = ["#F9D254", "#73D26F", "#4DBAF5", "#33fd5a47", "#6e7680"];
    var content_leader = 0;
    var content_target = 0;
    var content_timer = null;
    var adv_leader = 0;
    var adv_target = 0;
    var adv_timer = null;
    var adv_ofh = adv_left.offsetTop;

    for (var i = 0; i < contentList.length; i++){
        contentList[i].style.backgroundColor = bgColor[i];
    }

    for (var i = 0; i < navList.length; i++){

        navList[i].index = i;
        navList[i].onmouseover = function () {
            navList[this.index].style.opacity = "0.5";
        }
        navList[i].onmouseout = function () {
            navList[this.index].style.opacity = "1";
        }

        navList[i].onclick = function () {
            clearInterval(content_timer);
            content_target = contentList[this.index].offsetTop + top_h;
            content_timer = setInterval(function () {
                content_leader = content_leader + (content_target - content_leader)/10
                if (parseInt(content_leader-content_target) == 0){
                    clearInterval(content_timer);
                }
                window.scrollTo(0, content_leader);
            }, 20)

        }


        window.onscroll = function () {
            var leader = scroll().top;
            var backTimer = null;

            //导航条固定
            if(scroll().top >= top_h){
                nav.className = "nav_fixed";
            }else {
                nav.className = "nav_static";
            }

            //返回顶部
            if(scroll().top >= contentList[0].offsetHeight){
                showView(backToTop);
            }else {
                hideView(backToTop);
            }
            adv_target = scroll().top + adv_ofh;
            clearInterval(adv_timer);

            adv_timer = setInterval(function () {
                adv_leader = adv_leader + (adv_target - adv_leader)/10;
                adv_left.style.top = adv_leader + "px";
                adv_right.style.top = adv_leader + "px";
            },20)

            backToTop.onclick = function () {
                clearInterval(backTimer);
                backTimer = setInterval(function () {
                    leader = leader + (0 - leader)/10;
                    window.scrollTo(0, leader);
                    if (parseInt(leader) == 0){
                        clearInterval(backTimer);
                    }
                },20)

                // window.scrollTo(0, 0);
            }

        }
    }

}

