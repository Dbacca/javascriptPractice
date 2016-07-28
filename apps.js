//function todaysDate() {
//    var today = new Date();
//    var day = today.getDay();
//    var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//    //The getDay() method returns the day of the week (from 0 to 6) for the specified date.
//    //I used the array dayList to map the date returned by getDay to the correct day of the week
//    var date = today.getDate();
//    //The getDate() method returns the day of the month (from 1 to 31) for the specified date.
//    var month = today.getMonth();
//    //The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time.
//    var monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//    // I used the monthList array to map the month returned by getMonth to the appropriate month.
//    var year = today.getFullYear();
//    //The getFullYear() method returns the year (four digits for dates between year 1000 and 9999) of the specified date.
//    var hour = today.getHours();
//    //The getHours() method returns the hour (from 0 to 23) of the specified date and time.
//    var prepand = (hour >= 12) ? "PM" : "AM";
//    //bacause hours are returned from 0-23 i was able to use a comparator to determine whether it was AM or PM
//    hour = (hour >= 12) ? (hour - 12) : hour;
//    //I redeclared hour in a way that if it was past noon it would display the time in standard 12 hour format vs 24 hr
//    var minutes = today.getMinutes();
//    minutes = (minutes <= 10) ? "0" + minutes : minutes;
//    //if the number of minutes is below 10 it will add a zero to display the time in the correct format
//    var theTime = ("The current time is: " + hour + ":" + minutes + prepand);
//    var theDate = ("Today's Date is: " + dayList[day] + " " + monthList[month] + "  " + date + " " + year);
//    console.log(theDate);
//    console.log(theTime);
//}
//todaysDate();

//function to convert Celcius to Fahrenheit
function celciusToFahrenheit(cTemp) {
    var fTemp = (cTemp * 9 / 5 + 32);
    console.log(cTemp + "˚C is equal to " + fTemp + "˚F");
}
celciusToFahrenheit(30);
//function to convert Fahrenheit to Celcius
function fahrenheitToCelsius(fTemp) {
    var cTemp = ((fTemp - 32) * 5 / 9);
    console.log(fTemp + "˚F is equal to " + cTemp + "˚C");
}
fahrenheitToCelsius(86);
//function to reverse a number
function reverseNumber(number) {
    number = number + "";
    //converts number to a string
    return number.split("").reverse().join("");
    //splits the string into an array, then reverses the string in place and then rejoins the array into single string
}
console.log(reverseNumber(1234567));
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

function countVowels(string) {
    var vowelList = "aAeEiIoOuU";
    var vowelCount = 0;
    for (var i = 0; i < string.length; i++) {
        if (vowelList.indexOf(string[i]) !== -1) {
            vowelCount += 1;
            console.log(vowelCount);
        }
    }
    return vowelCount;
}
console.log(countVowels("damn how many vowels are in this statement"));
//code your own adventure game using swith and conditional opperators || && 
var user = prompt("there is a bridge ahead but it looks a little shaky do you want to RUN across  Sneak under or try to jump the gap?");
var answer = user.toLowerCase();
var strength = 5;
var speed = 5;
var agility = 10;
switch (answer) {
case 'run':
    if (speed >= 7 || agility >= 8) {
        console.log("wow you are fast! you made it across no problem");
    }
    else {
        console.log("you try to run but the bridge breaks and you fall");
    }
    break;
case 'sneak':
    if (agility >= 7) {
        console.log("it takes a while but you sneak under the bridge and get to the otherside");
    }
    else {
        console.log("you were too loud and a near by gang of vandals heard you and is now chasing you");
    }
    break;
case 'jump':
    if (strength >= 7 && speed >= 9) {
        console.log("wow you have some serious hops you jumped right across the river");
    }
    else {
        console.log("whoa bro you think you can jump across a river.... try again");
    }
    break;
default:
    console.log(" im not sure what you meant by " + user + " why don't you try again. enter RUN, SNEAK or JUMP to get across the bridge");
    break;
}