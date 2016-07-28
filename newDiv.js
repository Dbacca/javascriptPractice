$(function () {
    $("#divBtn").on('click', newDiv);

    function newDiv() {
        console.log('clicked');
        var test = {
            id: "div"
            , class: "divClass"
            , css: {
                "color": "Green"
            }
        };
        var $div = $("<div>", test);
        $div.html("you made this div");
        $("body").append($div);
    }
});
//function new_div() {
//    $(document).ready(function () {
//        var test = {
//            id: "div"
//            , class: "divclass"
//            , css: {
//                "color": "Green"
//            }
//        };
//        var $div = $("<div>", test);
//        $div.html("New Division");
//        $("body").append($div);
//    });
//}