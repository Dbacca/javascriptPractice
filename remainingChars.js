$(function () {
    var maxLength = 15;
    $('textarea').keyup(function () {
        var textlen = maxLength - $(this).val().length;
        $('#remainingChars').text(textlen);
    });
});