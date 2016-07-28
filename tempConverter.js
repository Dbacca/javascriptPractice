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