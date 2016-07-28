
//my name
var fName = "Drew";
var lName = "Sincebaugh";
var name = fName + lName;

alert(name);


//busy message
var busy = false;

if(busy == false){
alert("I'm not busy come on in!");

}else{
alert("Sorry I'm a little busy at the moment, check back in 5 minutes");
}

function buildUser (first,last){
  let fullName = first + " " + last;

  return{first, last, fullName};
};
// let user = buildUser("Sam", "Jacobs");
let {first, last, fullName} = buildUser('Sam', "Jacobs");

console.log(first);
console.log(last);
console.log(fullName);

//objest initializer

let name = "Sam";
let age = 45;
let friends = ["Brook", "Tyler"]

let user = {name, age, friends};
// this eliminates the need to assign the old way name:name age:age
console.log(user.name);
console.log(user.age);
console.log(user.friends);
