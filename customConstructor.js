//custom constructor to create a new object Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
var george = new Person("George Washington", 275);
console.log(george);
console.log(susan);
console.log(bob);
//custome constructors to create new objects for both cat and dog
function Cat(age, color) {
    this.age = age;
    this.color = color;
}
// make a Dog constructor here
function Dog(age, color, breed, weight) {
    this.age = age;
    this.color = color;
    this.breed = breed;
    this.weight = weight;
};
var lab = new Dog(7, "black", "labrador", 25);
console.log(lab);
//custom constructor with a value that is universal to all objects in this case species
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.species = "Homo Sapiens";
}
var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age);
console.log("holden's species is " + holden.species + " and he is " + holden.age);
//custom constructor that creates a rectangle with methods to calculate area and perimeter
function Rectangle(height, width) {
    this.height = height;
    this.width = width;
    this.calcArea = function () {
        return this.height * this.width;
    };
    this.calcPerimeter = function () {
        return (this.height * 2) + (this.width * 2);
    };
}
var rex = new Rectangle(7, 3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();
console.log(rex);
console.log(area);
console.log(perimeter);
//custom construcotr 
function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function () {
        console.log("I am a " + this.adjective + " rabbit");
    };
}
// now we can easily make all of our rabbits
var rabbit1 = new Rabbit('fluffy');
var rabbit2 = new Rabbit('happy');
var rabbit3 = new Rabbit('sleepy');
console.log(rabbit1.describeMyself());
console.log(rabbit2.describeMyself());
console.log(rabbit3.describeMyself());
// Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Now we can make an array of people
var family = [];
family[0] = new Person('alice', 40);
family[1] = new Person('bob', 42);
family[2] = new Person('michelle', 8);
family[3] = new Person('timmy', 6);
// loop through our new array
for (var i in family) {
    console.log(family[i].name);
}