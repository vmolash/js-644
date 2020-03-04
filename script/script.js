let num = parseInt(window.prompt('Enter a number between 1 and 10'));
window.console.log(typeof num);
// if (num === 5) {
// window.document.write('You guessed right!');
// } else {
//     window.document.write('You guessed wrong number!');
// }

(num === 5) ? window.document.write('You guessed right!') : window.document.write('You guessed wrong number!');

let grade = window.prompt('Enter the student\'s grade');
if (grade >= '90') {
    window.document.write('Student received an A');
} else if (grade >=80) {
    window.document.write('Student received an B');
} else if (grade >=70) {
    window.document.write('Student received an C');
} else if (grade >=60) {
    window.document.write('Student received an D');
} else {
    window.document.write('Student failed the course');
}