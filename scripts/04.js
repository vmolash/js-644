// 1.	Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.
// 2.	Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…” 
// 3.   Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”
// 4.   Use a switch statement to check for the literal string values forward, left, and righ. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”
// 5.	Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”
// 6.	Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.

var ready = confirm('Are you ready to play the game?');
if (ready) {
    alert("Awesome, our hero is waiting!");   
} else {
    alert("Too bad, we’re going to play any because our hero desperately needs your help!");
}

alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

var direction = prompt("Which direction would you like to head (please enter forward, left, or right).");

switch(direction) {
    case 'left':
         alert('You walk about 100 yards and safely make your way out of the cave.');
        break;
    case 'forward':
        alert('You walk about 100 yards and safely make your way out of the cave.');
        break;
    case 'right':
        alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
        break;
    default:
        alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.');
}
var rating = prompt("Please rate our game on a scale of 1-10");
if ( !isNaN(rating) ) {
    if (rating > 5 && rating <= 10) {
        alert("Thank you, we will continue to make improvements to the game!");
    } else if (rating > 0 && rating <= 5) {
        alert("Whatever, you weren’t very good at this game anyway!");
    } else {
        alert("You didn't enter a number between 1 and 10");
    }
} else {
    alert("You didn't enter a number");
}
