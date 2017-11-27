//Lecture: Variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

/*
// Lecture: Variables 2

var name = 'John';
var age = 26;

// console.log(name + age);
// console.log(age + age);

var job, isMarried;

// console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


age = 'thirty six';
job = 'plumber';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.')
*/

// Lecture: operators

/*
var now = 2017;
var birthyear = now - 26;

birthyear = now - 26 * 2;

//2016 - 52
//1964

console.log(birthyear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark =  (3 + 5) * 4 - 6;

//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++

// agejohn = ageJohn + 1

ageMark *= 2;

//ageMark = ageMark * 2

console.log(ageJohn);
console.log(ageMark);

*/

///////////////////////////////////////////
// Lecture if/else statements


// var name = 'John';
// var age = 26;
// var isMarried = 'yes';
//
// if (isMarried === 'yes') {
//   console.log(name + ' is married ');
// } else {
//   console.log(name + ' will hopefully marry soon :)');
// }
//
// isMarried = false;
//
// if(isMarried) {
//   console.log('YES!');
//
// } else {
//   console.log('NO!')
// }
//
// if (23 === "23") {
//   console.log('Something to print...');
// }


////////////////////////////////////////////
// Lecture Boolean and Switch
//
// var age = 20;
//
// //test one
// if (age < 20) {
//   console.log('John is a teenager');
//
// }
// //test two
//  else if (age >= 20 && age < 30) {
//    console.log('John is a young man.')
//  }
//
//  //test three
//  else {
//   console.log('John is a man')
// }
//
//
// var job = 'teacher';
//
// job = prompt('What does john do?');
//
// switch (job) {
//   case 'teacher':
//   console.log('John teaches kids.');
//   break;
//   case'driver':
//   console.log('John drives a cab in Lisbon');
//   break;
//   case 'cop':
//   console.log('John helps fight crime');
//   break;
//   default:
//   console.log('John does something else.');
// }




///////////////////////////////////////
// CODING CHALLENGE 1 THE GAME

// var ageJohn = 32;
// var ageFred = 32;
// var ageIan = 32;
// var heightFred = 1;
// var heightJohn = 1;
// var heightIan = 1;
//
// var scoreJohn = heightJohn + (5 * ageJohn);
// var scoreFred = heightFred + (5 * ageFred);
// var scoreIan = heightIan + (5 * ageIan);
//
// console.log(scoreJohn);
// console.log(scoreFred);
//
// if (scoreJohn > scoreFred && scoreJohn > scoreIan) {
//   console.log('John Wins ' + scoreJohn);
// }
//
// else if (scoreFred > scoreJohn && scoreFred > scoreIan) {
//   console.log('Fred Wins with ' + scoreFred);
// }
//
// else if (scoreIan > scoreFred && scoreIan > scoreJohn) {
//   console.log('Ian wins with ' + scoreIan);
// }
//
// else  {
//   console.log('It\'s a draw.');
// }

///////////////////////////////////////
// Lecture: Functions


// function calculateAge(yearOfBirth) {
//   var age = 2017 - yearOfBirth;
//   return age;
// }
//
// var ageRachel = calculateAge(1990);
// var ageMicaela = calculateAge(1994);
// var ageFrances = calculateAge(1950);
//
//
// function yearsUntilRetirement(name, year) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//   if(retirement >= 0) {
//   console.log(name + 'retires in ' + retirement + ' years.');
// } else {
//   console.log(name + 'has already retired.');
// }
// }
//
// yearsUntilRetirement('Rachel', 1990);
// yearsUntilRetirement('Micaela', 1994);
// yearsUntilRetirement('Frances', 1950);

///////////////////////////////////////
// Function Practice: Function to Calculate How Drunk You Are

function shouldIDriveHome() {

  var drinks = prompt("Please tell me how many drinks you have had");

  if(drinks < 1) {
    console.log('You are sober, the designated driver, and the real hero today');
    document.getElementById("answer").innerHTML =
        "You are sober, the designated driver, and the real hero today";
  }
  else if(drinks == 1) {
    console.log('You Can Drive');
    document.getElementById("answer").innerHTML =
        "You have only had " + drinks + " drink so you can drive.";
  }
  else if(drinks == 2) {
    console.log('Depending On Your Tolerance, you might be able to drive');
    document.getElementById("answer").innerHTML =
        "You have had " + drinks + " drinks so, you are probably starting to get tipsy if you are a light-weight. You can probably drive though.";
  }
  else if(drinks == 3) {
    console.log('I think you might be able to drive home if you wait for an hour or so and drink some water.');
    document.getElementById("answer").innerHTML =
        "I think after having " + drinks + " you might be able to drive home if you wait for an hour or so and drink some water.";
  }
  else if(drinks == 4) {
    console.log('I\'d consider taking a Lyft or going with the designated driver at this point. You are drunk.');
    document.getElementById("answer").innerHTML =
        "After " + drinks + " drinks, you are definitely not sober, and should either take a Lyft or find your designated driver.";
  }
  else if(drinks == 5) {
    console.log('Let\'s be honest. You are pretty drunk. So enjoy it, Just don\'t drive');
    document.getElementById("answer").innerHTML =
        "Let's be honest, with " + drinks + " drinks you are drunk. So enjoy it, just don't drive";
  }
  else {
    console.log('Whoever is reading this: grab a fucking Lyft and go home. Also, drink some water.');
    document.getElementById("answer").innerHTML =
        "Whoever is reading this: grab a fucking Lyft and go home. Also, drink some water.";
  }
}
