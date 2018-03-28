/**
 * Created by zhangzhuokui on 2018/3/28.
 */
function $(name) {
    var firstChar = name.charAt(0);
    switch (firstChar) {
        case "#":
            return document.getElementById(name.substr(1));
            break;

        case "."://暂不考虑多类名情况
            return document.getElementsByClassName(name.substr(1));
            break;

            return document.getElementsByTagName(name);

    }
}

function scroll() {
    if (window.pageYOffset != null){//ie9+ 其他浏览器
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }else if (document.compatMode == "CSS1Compat"){//是否声明 <!DOCTYPE html>
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }else {
        return {
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }

}

function showView(view) {
    view.style.display = "block";
}

function hideView(view) {
    view.style.display = "none";
}