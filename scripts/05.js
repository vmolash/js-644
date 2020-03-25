// 1.	Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
// 2.	Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
// 3.	Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails.
// 4.	If the result is heads and the user selects heads, display the following message within an alert: 
// The flip was heads and you chose heads...you win!
// 5.	If the result is heads and the user selects tails, display the following message within an alert: 
// The flip was heads but you chose tails...you lose!
// 6.	If the result is tails and the user selects heads, display the following message within an alert: 
// The flip was tails but you chose heads...you lose! 
// 7.	If the result is tails and the user selects tails, display the following message within an alert: 
// The flip was tails and you chose tails...you win!
// 8.	Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result. 

var coinFlip = Math.round(Math.random());
console.log(coinFlip);
var choice = prompt('Choose Heads or Tails');

if (coinFlip) { // testin for boolean of t/f (1/0)
    if(choice == 'heads') {
        alert('The flip was heads, you chose heads... you WIN!');
    } else {
        alert('The flip was heads, you chose tails.. you lose!');
    }
} else { // in this case coinFlip = 0 (false)
    if(choice == 'heads') {
        alert('The flip was tails, but you chose heads... you lose!');
    } else {
        alert('The flip was tails, but chose tails.. you WON!');
    }
} 




// // Jeremy
// // gets a random number to be used later
// var coinFlip = Math.floor (Math.random() * 9 + 1) ;

// // uses the random number to get heads or tails
// var result;

// // gets user choice of heads or tails
// var choice = prompt ("Choose heads or tails");

// // assigns the random number to a digital coin flip
// if (coinFlip <= 5) {
//     result = 'heads';
// } else if (coinFlip > 5) {
//     result = 'tails'
// }

// // first if statement checks to see if the user wins (both are the same: heads or tails)

// if (result === choice) {
//     if (result === 'heads') {
//         alert ("The flip was heads and you chose heads...you win!");
//     } else {
//         alert ("The flip was tails and you chose tails...you win!");
//     }

// // This else statement means that the user lost (both are different from each other)
// } else {
//     if (result === 'heads') {
//         alert ("The flip was heads but you chose tails...you lose!");
//     } else {
//         alert ("The flip was tails but you chose heads...you lose!");
//     }
// } 


// Manisha 
// var ans;
// do{
//     var ans = prompt('want to play coin flip? (y/n)');
//     if(ans === 'n'){break;}

//     var coinFlip = Math.floor(Math.random()*10); //could also use round and not do *10
//     console.log(coinFlip);
//     var choice = prompt('Enter heads or tails:')
//     var flipResult;
//     if (coinFlip <=5){
//         flipResult = 'heads';
//     } else {
//         flipResult = 'tails';
//     }

//     if(flipResult === 'heads' && choice === 'heads'){
//         alert('The flip was heads and you chose heads...you win\!');
//     } else if (flipResult === 'heads' && choice === 'tails'){
//         alert('The flip was heads but you chose tails...you lose\!');
//     } else if (flipResult === 'tails' && choice === 'heads'){
//         alert('The flip was tails but you chose heads...you lose\!');
//     } else if(flipResult === 'tails' && choice === 'tails'){
//         alert('The flip was tails and you chose tails...you win\!');
//     }
// }while (ans === 'y')
// alert ('thank you for playing.');