//simple function using jQuery that dynamically displays  
//the amount of characters remaining

$(function () {
    var maxLength = 15;
    //this character max is defined as an attribute in the HTML
    $('textarea').keyup(function () {
        var textlength = maxLength - $(this).val().length;
        $('#remainingChars').text(textlength);
    });
});
