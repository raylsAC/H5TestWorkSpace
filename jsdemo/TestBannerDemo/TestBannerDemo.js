/**
 * Created by zhangzhuokui on 2018/3/21.
 */
window.onload = function () {

    var PERIOD = 10;
    var bannerBox = $("#auto_banner");
    var count = 0;
    var timerAuto = null;
    timerAuto = setInterval(setBannerAuto,PERIOD);

    bannerBox.onmouseover = function () {
        clearInterval(timerAuto);
    };

    bannerBox.onmouseout = function () {
        timerAuto = setInterval(setBannerAuto,PERIOD);
    };


    function setBannerAuto() {
        count++;
        if (count > 1340){
            count = 0;
        }
        bannerBox.children[0].style.left = -count+"px";
    }

    var transX = 0; var endX = 0;
    var bannerIndicate = $("#indicate_banner");
    var indicators = bannerIndicate.children[1];
    var timerIndicate = null;


    for (var i = 0; i < indicators.children.length; i++){
        indicators.children[i].index = i;
        indicators.children[i].onclick = function () {
            var index = this.index;
            endX = index * 335;
            timerIndicate = setInterval(function () {
                transX = transX + (endX - transX)/20;
                bannerIndicate.children[0].style.left = -transX+"px";

            },PERIOD);
        }

        indicators.children[i].onmouseover = function () {
            this.className = "span_hover";
        }

        indicators.children[i].onmouseout = function () {
            this.className = "span_normal";
        }

    }


    // function setBannerIndicate() {
    //
    //     transX = transX + (endX - transX)/15;
    //     bannerIndicate.children[0].style.left = -transX+"px";
    // }

    function $(name) {
        var firstChar = name.charAt(0);
        switch (firstChar){
            case "#":
                return document.getElementById(name.substr(1));
                break;

            case ".":
                return document.getElementsByClassName(name.substr(1));
                break;

            return document.getElementsByTagName(name);

        }

    }

}