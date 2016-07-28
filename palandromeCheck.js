//function to check if a number is a palandrome
function palandromeCheck(number) {
    number = number + "";
    var reverse = number.split("").reverse().join("");
    //reverse the initial number
    if (number == reverse) {
        //check and see if original number and reversed number are equal
        console.log("Cool looks like this number is a palandrome");
        // if equal "yay this number is a palandrome"
    }
    else {
        console.log("oops looks like this number isn't a palandrome");
        //else "oops looks like this isn't a palandrom"
    }
}
palandromeCheck(1221);
