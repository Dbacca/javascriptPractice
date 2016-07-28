//this is designed to make the blink class fade in adn out or "Blink"
$(function () {
    function blinkText() {
        $(".blink").fadeOut(500);
        $(".blink").fadeIn(500);
    }
    setInterval(blinkText, 1000)
});