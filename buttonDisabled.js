$(function () {
    $('#check').click(function () {
        //when you click the checkbox
        if ($('#submit').is(':disabled')) {
            //check for disabled attribute on submit button
            $('#submit').removeAttr('disabled');
            //if there is a disabled attribute remove atribute
        }
        else {
            $('#submit').attr('disabled', 'disabled');
            //else apply disabled attribute
        }
    });
    $('#submit').click(function () {
        //when you click submit
        alert("nice you figured it out!");
    });
});