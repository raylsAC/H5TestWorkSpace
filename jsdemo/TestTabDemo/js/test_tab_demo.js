/**
 * Created by zhangzhuokui on 2018/3/16.
 */

window.onload = function () {

    var lists = document.getElementById("tab_div").getElementsByTagName("li");
    var display = document.getElementById("display_div");

    for (var i = 0; i < lists.length; i++){
        lists[i].index = i;
        lists[i].onmouseover = function () {

            for(var j = 0; j < lists.length; j++){
                lists[j].className = "border_bottom_gray";
            }

            this.className = "border_bottom_white";

            display.style.backgroundImage = "url(../images/ad" + (this.index + 1) +".jpg)";

        }
    }
}


