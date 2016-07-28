function reverseNumber(number) {
    number = number + "";
    //converts number to a string
    return number.split("").reverse().join("");
    //splits the string into an array, then reverses the string in place and then rejoins the array into single string
}
console.log(reverseNumber(1234567));