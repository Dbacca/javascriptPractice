// person constructor creats a new object with 
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function (person1, person2) {
    return person1.age - person2.age;
};
//function olderAge returns the age of
// the older of two people
var olderAge = function (person1, person2) {
    if (person1.age >= person2.age || person1.age == person2.age) {
        return person1.age;
    }
    else {
        return person2.age;
    }
};

// alice and billy are used to test the new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);
console.log("The older person is " + olderAge(alice, billy));
