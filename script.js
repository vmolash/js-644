// STET 1
// var num = 8; // numeric
// var str = "hello"; // string
// var bool = true; // boolean true or false
// console.log(num, str, bool);

// STEP 2
// var strFirstName;
// var strLastName;
// var strAddress;
// var strCity;
// var strState;
// var strZipCode;
// var numYourAge;
// var strReferralSource;
// var boolMayWeContactYou;

// STEP 3
// 1 method - Declare many variables in one statement
// var strFirstName = "Mike", numYourAge = 45, boolMayWeContactYou = true;
// console.log(strFirstName, numYourAge, boolMayWeContactYou);

// 2 method - Declare a variable is one statement (after the declaration, the variable has no value (undefined)). Assign a value to the variable is a second statement. 
// var strLastName;
// strLastName = "Jonhson";
// console.log(strLastName);

// var strAddress;
// strAddress = "8330 Aero drive";
// console.log(strAddress);

// 3 method - Assign a value to the variable when we declare it
// var strCity = "San Diego";
// var strZipCode = "92104";
// var strReferralSource = "Bob Marley"
// var boolMayWeContactYou = false;
// console.log(strCity, strZipCode, strReferralSource, boolMayWeContactYou);

// STEP 4
// var str = "I like to eat apples when it is sunny and not raining.";
// console.log("The sentence has " +  str.length + " characters");

// STEP 5
// var first = "card";
// console.log(first + " " + 7 + " is on the table");

// var second = "Is it";
// console.log(second + " " + true + " that Pluto is not a planet?!");

// var third = 3.141592653589793238462643;
// console.log(Math.round(third));

// STEP 6
// var heading = "Let's make this earth cleaner";
// var paragr = " Join us at 9am every Sunday Pacific Beach";
// document.write("<h1>" + heading + "</h1>" + "<p>" + paragr + "</p>");

// STEP 7
// It is not valid. Fixed variant below

// var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
// console.log(someString);


// STEP 8
// Print to the console

// function createUserName() {
//     var userName = prompt("Enter your name");
//     console.log("Welcome " + userName + " to 644 class!");
// }
// createUserName();

// Print to the page

// function createUserName(name) {
//     var hEle = document.createElement('h2');
//     var nNode = document.createTextNode("Welcome " + name + " to our page!");
//     hEle.appendChild(nNode);
//     document.body.appendChild(hEle);
// }
// createUserName(prompt("Please Enter you name"));

// STEP 9
// console.log(typeof("forest"));
// console.log(typeof(4));
// console.log(typeof(true));

// console.log(typeof([4, 2, 'five']));
// console.log(typeof({name: "Bob", age: 40}));

// STEP 10
// alert("Hello " + "Volha Molash" + ", welcome to the 644 class!");

// STEP 11
// var name = "Volha Molash";
// alert("Hello "+ name + ", welcome to the 644 class!");

// STEP 12
// var course = "JavaScript";
// var name = "Olya Molash";
// alert("Hello " + name + ", welcome to the " + course + " 644 class!");

// STEP 13
// var name = "Volha Molash";
// alert("Hello " + name + ".\n" + "Welcome to the 644 class!");

// STEP 14
// var nameUser = prompt("Please enter your name");
// alert("Hello " + nameUser + ".\n" + "Welcome to the 644 class!");

// STEP 15
// var nameUser = prompt("Please enter your name");
// var courseUser = prompt("Please enter your class");
// alert("Hello " + nameUser + ".\n" + "Welcome to the " + courseUser + " class!");

// STEP 16
// x = 10; //assign
// y = 20;
// console.log(x + y);

// STEP 17
// var x = 20; //declare (with var) and assign (with = )
// console.log(x += 20);

// STEP 18
// var x = 20;
// console.log( x *= 5);

// STEP 19
// var x = 8;
// console.log(++x);

// STEP 20
// var arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
// console.log(arr);

// Assignment 2
// STEP 1
// var name = prompt('Please, enter your Name');
// alert('The length of ' + name + ' is ' + name.length);

// STEP 2
// var name = prompt('Please, enter your Name');
// var num = prompt('Please, enter a numeric value from 1 to ' + name.length);
// alert(name[num-1]);

// STEP 3
// var firstName = prompt('Please, enter your First Name');
// var lastName = prompt('Please, enter your Last Name');
// alert('Your name is: ' + firstName + ' ' + lastName);

// STEP 4
// var str = 'The quick brown fox jumps over the lazy dog';
// alert('The index of word "fox" starts from ' + str.indexOf('fox'));

// STEP 5
// var str = 'The quick brown fox jumps over the lazy fox';
// var word = 'fox';
// var indexOfFirst = str.indexOf(word);
// alert('The index of the last instance of the word "fox" is ' + str.indexOf(word,(indexOfFirst + 1)));

// STEP 6 ?????
// 1 way
// var str = 'The quick brown fox jumped over the lazy dog';
// var name = prompt('Please, enter your full name');
// var newStr = str.replace('the lazy dog', name);
// alert(newStr);

// STEP 7
// var str = 'The quick brown fox jumps over the lazy dog';
// var word = prompt('Please, enter a word');
// if ( str.indexOf(word) !== -1) {
//     alert(word + ' was found in the string');
// } else {
//     alert(word + " wasn't found in the string");
// }

// STEP 8
// var old_string = 'The quick brown fox jumps over the lazy dog';
// var new_string = old_string.substring(old_string.indexOf('the lazy dog'));
// alert(new_string.toUpperCase());

// STEP 9
// var str = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ';
// var newStr = str.trim();
// alert(newStr.toLowerCase());

// STEP 10
// var str = 'the quick brown fox jumps over the lazy dog';
// var newStr = str[0].toUpperCase() + str.slice(1);
// alert(newStr);

