function todaysDate() {
    var today = new Date();
    var day = today.getDay();
    var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //The getDay() method returns the day of the week (from 0 to 6) for the specified date.
    //I used the array dayList to map the date returned by getDay to the correct day of the week
    var date = today.getDate();
    //The getDate() method returns the day of the month (from 1 to 31) for the specified date.
    var month = today.getMonth();
    //The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time.
    var monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // I used the monthList array to map the month returned by getMonth to the appropriate month.
    var year = today.getFullYear();
    //The getFullYear() method returns the year (four digits for dates between year 1000 and 9999) of the specified date.
    var hour = today.getHours();
    //The getHours() method returns the hour (from 0 to 23) of the specified date and time.
    var prepand = (hour >= 12) ? "PM" : "AM";
    //bacause hours are returned from 0-23 i was able to use a comparator to determine whether it was AM or PM
    hour = (hour >= 12) ? (hour - 12) : hour;
    //I redeclared hour in a way that if it was past noon it would display the time in standard 12 hour format vs 24 hr
    var minutes = today.getMinutes();
    minutes = (minutes <= 10) ? "0" + minutes : minutes;
    //if the number of minutes is below 10 it will add a zero to display the time in the correct format
    var theTime = ("The current time is: " + hour + ":" + minutes + prepand);
    var theDate = ("Today's Date is: " + dayList[day] + " " + monthList[month] + "  " + date + " " + year);
    console.log(theDate);
    console.log(theTime);
}
todaysDate();
