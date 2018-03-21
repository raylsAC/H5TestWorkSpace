/**
 * Created by zhangzhuokui on 2018/3/15.
 */

function select(itemId) {
    var displayId = document.getElementById("display");
    var color;

    switch (itemId) {
        case "select1":
            color = "hotpink";
            break;
        case "select2":
            color = "dodgerblue"
            break;
        case "select3":
            color = "olivedrab"
            break;
        case "select4":
            color = "yellow"
            break;
        case "select5":
            color = "mediumpurple"
            break;
    }

    displayId.style.backgroundColor = color;

}
