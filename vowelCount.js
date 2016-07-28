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