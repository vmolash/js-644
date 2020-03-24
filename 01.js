// // global variables
// var entry;
// var average;
// var score1, score2, score3;
// var total = 0;

// // get scores from user and add them together
// entry = window.prompt('Enter test score 1');
// score1 = parseInt(entry, 10);
// total += score1;

// entry = window.prompt('Enter test score 1');
// score2 = parseInt(entry, 10);
// total += score2;

// entry = window.prompt('Enter test score 1');
// score3 = parseInt(entry, 10);
// total += score3;

// // calculate the average
// average = parseInt(total / 3, 10);

// // display the results
// document.write('The first score was: ', String(score1) + '<br>');
// document.write('The second score was: ', String(score2) + '<br>');
// document.write('The third score was: ', String(score3) + '<br>');
// document.write('The average score was: ', String(average));
// challenge - make it so user can enter as many scores as possible and write 'done' when they have no more. Use .lenght to calculate length of the array and update the scores.


// Manisha
// entry = window.prompt('Enter test score: ');
// do {
//     if (entry === 'n'){
//         break;
//     } else{
//         score.push(entry);
//         entry = window.prompt('Enter test score: ');
//     }
// }while(entry !== 'n') 


var entry;
var average;
var score = []; // array
var total = 0;

while(entry !== 'n') {
    score.push(prompt('Enter your score'));
    entry = prompt('Would you like to add another score? y/n');
    console.log(score);
}

for(var i = 0; i < score.length; i++) {
    score[i] = parseInt(score[i], 10);
    total += score[i];
    console.log(total);
}
average = parseInt(total / score.length);
console.log(average);

document.write('Your scores are: ' + score.join(' - ') + '<br>' + 'Your average score is: ' + average);