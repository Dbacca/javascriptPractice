alert("alert this is in a pop up")
confirm("are you sure you want to move forward?")
//ok = true value cancel = false value//

prompt("how old are you")
//request and store info in a var//
typeof true
typeof "string"
typeof null
make a confirmation flag
until user has confirmed name do this
request the name using prompt
if user says ok at confirmed
acknowledge the accepted entry
adjust flag to exit the loop

otherwise, cycle back to top of t loop
//confirm username //
var gotName = false;
while (gotName == false){
  var userName = prompt("yo passenger! What's your name?");
   if( confirm("Are you sure your name is " + userName + "?")){
     alert("'Sup '" + userName + "!");
     gotName = true;
   }
}

//confirm user age //
var ageIsCorrect = false;
while(ageIsCorrect == false){
var userAge = prompt("What's your age, user?");
  if(confirm("You entered " + userAge + ". Is this correct?")){
    alert("Great your age is logged as " + userAge + ".");
  	ageIsCorrect = true;
  }
}
//introduction to functions//
function sumOfCubes (a,b){
var aCubed = a*a*a;
var bCubed = b*b*b;
var sum = aCubed + bCubed;

  //do stuff here//

  return sum;

}
sumOfCubes(4,9)

function sumOfCubes2 (a,b){
  return a*a*a + b*b*b;
}


// return the greater number
function maxOf2 (a,b){
  if (a === b){
    return a;
  }else if( a > b){
    return a;
  }else{
    return b;
  }
}
//character count function
function countE() {
var phrase = prompt("Which phrase would you like to examine?");
if(typeof(phrase)!= "string"){
    alert("That's not a valid entry!");
    return false;
  }else}
  var eCount = 0
  for( var index = 0; index < phrase.length; index ++){
  if(phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E');
  ecount++;
}
}
  alert("there are " + eCount + " e's in the phrase ")

}



//change total power

function changePowerTotal(totalPower, genID, genStatus, genPower) {
if (genStatus == "on") {
  totalPower += genPower;
  alert("Generator #" + genID + " is now " + genStatus + ", adding " + genPower + " MW, for a total of " + totalPower + " MW!");
} else if (genStatus == "off") {
  totalPower -= genPower;
  alert("Generator #" + genID + " is now " + genStatus + ", removing " + genPower + " MW, for a total of " + totalPower + " MW!");
}
return totalPower;
}


//ARRAYS!
passengers.push("Adam Rensel")
passangers.pop()

function addPassenger (name, list){
if (list.length == 0 ){
  list.push(name);
}else{
for (var i = 0; i < list.length; i++) {
  if(list[i] == undefined){
    list[i] = name;
    return list;
  }else if (i === list.length - 1) {
    list.push(name);
    return list;

     }
   }
  }
}

var passengerList = [];
passengerList = addpassenger("greg Pollack", passengerList)

function numStrings(list) {
var count = 0//number of strings
for(var i = 0 ; i < list.length ; i++){
  if (i.typeof == "string"){
		count++;
}
return count;



function adventureSelector(userChoice) {
  // return anonymous functions inside conditional blocks
  return function(userChoice){
    if (userChoice == 1){
     return alert("You selected the Vines of Doom!");
    }
    else if(userChoice == 2){
      return alert("Looks like you want the Lake of Despair!");
    }
      else{
       return alert("The Caves of Catastrophe!");
      }
 };
}


//closures

function mystery(4) {

  function mystery2(2) {
    2 *= 4;
    return 5 * multiplier;
  }
  return mystery2;
}

var hidden = mystery(4);
var result = hidden(2);
//result is 40 with this one!

function mystery(3) {
  var secret = 4;
  3 += 2;
  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }
  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus;
  }
  return mystery4;
}

var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);
//answer is 122


//obstacle warning
function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // push an array with location and number
    zones.push([number, location]);
    for (var i = 0; i < zones.length; i++) {
      // replace location and number with appropriate code
      list += zones[i] [1]+ " (" + zones[i][0] + ")" + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  };
}





//vehicle finder
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

// create vehicles array
var vehicles = [vehicle1, vehicle2 , vehicle3];

// build findVehicle function expression
var findVehicle = function (name, list){
  for(var i = 0; i < list.length; i++){
  if(list[i].type == name){
  return list[i].storedAt;
  }
  }
};
// call findVehicle
findVehicle("Submarine", vehicles);





//THC in MG per edible using concentrates
function edibleCalc (concentrateWeight,edibleQTY){
var concentrateMGWeight = concentrateWeight*1000;
return (concentrateMGWeight/edibleQTY)* .75;
}
edibleCalc(10,50);

//Gun list creator
var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

// build listGuns
function listGuns (guns){
  for (var speargun in guns){
  	console.log(speargun);

  }
};

// call listGuns and pass in rockSpearguns
listGuns(rockSpearguns);
