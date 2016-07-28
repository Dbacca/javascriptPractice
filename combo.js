$(function () {
    $("tr:odd").addClass("zebra");
    //add zebra class to all odd rows (0 index)
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
    $("a[href='#top']").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
    // click handler for scroll to top button
    function blinkText() {
        $(".blink").fadeOut(500);
        $(".blink").fadeIn(500);
    }
    setInterval(blinkText, 2000)
        //this sets the interval which determines how often the blink function is run
    $(".print").click(function () {
        window.print();
        //print entire window
        return false;
    });
    //click handler for print button
    var maxLength = 15;
    $('textarea').keyup(function () {
        // the code below executes on each keyup withing the text area
        var textLength = maxLength - $(this).val().length;
        //the textLength variable is equal to the maxLength Variable minus the length of the value in the text area
        $('#remainingChars').text(textLength);
        //this uses  textlength to display remaining characters 
    });
    //key up function for text field
});