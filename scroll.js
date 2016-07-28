//this is designed to scroll to the top of the page using jQuery
$(function () {
    console.log("ready!");
    $("a[href='#top']").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
});