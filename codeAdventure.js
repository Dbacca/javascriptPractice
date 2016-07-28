//code your own adventure game using swith and conditional opperators || && 
var user = prompt("there is a bridge ahead but it looks a little shaky do you want to RUN across  Sneak under or try to jump the gap?");
var answer = user.toLowerCase();
var strength = 5;
var speed = 5;
var agility = 10;
switch (answer) {
case 'run':
    if (speed >= 7 || agility >= 8) {
        alert("wow you are fast! you made it across no problem");
    }
    else {
        alert("you try to run but the bridge breaks and you fall");
    }
    break;
case 'sneak':
    if (agility >= 7) {
        alert("it takes a while but you sneak under the bridge and get to the otherside");
    }
    else {
        alert("you were too loud and a near by gang of vandals heard you and is now chasing you");
    }
    break;
case 'jump':
    if (strength >= 7 && speed >= 9) {
        alert("wow you have some serious hops you jumped right across the river");
    }
    else {
        alert("whoa bro you think you can jump across a river.... try again");
    }
    break;
default:
    alert(" im not sure what you meant by " + user + " why don't you try again. enter RUN, SNEAK or JUMP to get across the bridge");
    break;
}