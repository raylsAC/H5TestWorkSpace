/**
 * Created by zhangzhuokui on 2018/3/26.
 */
window.onload = function () {

    var scrollBtn = document.getElementById("btn");
    var bar = document.getElementById("bar");
    var scrollBar = document.getElementById("process");

    scrollBtn.onmousedown = function (event) {
        var event = event || window.event;
        var startX = event.clientX - this.offsetLeft;

        //注意此处用的是document.onmousemove，并不是scrollBtn.onmousemove
        document.onmousemove = function (event) {
            var event = event || window.event;
            var moveX = event.clientX - startX;

            scrollBtn.style.left = moveX + "px";
            scrollBar.style.width = moveX + "px";

            if (parseInt(scrollBtn.style.left) < 0){
                scrollBtn.style.left = 0;
                scrollBar.style.width = 0 + "px";
            }

            if (parseInt(scrollBtn.style.left) > bar.offsetWidth){
                scrollBtn.style.left = bar.offsetWidth + "px";
                scrollBar.style.width = bar.offsetWidth + "px";
            }


            //防止选择拖动
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        }

        //注意此处用的是document.onmouseup，并不是scrollBtn.onmouseup
        document.onmouseup = function () {
            document.onmousemove = null;
        }

    }

}
