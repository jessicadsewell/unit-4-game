//  Here's how the app works:

//    * There will be four crystals displayed as buttons on the page.
//    * Each crystal should have a random hidden value between 1 - 12. -->

//    * The player will be shown a random number at the start of the game.
//    * The random number shown at the start of the game should be between 19 - 120. -->

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes 

//create variables to track 

var wins = 0;
var losses = 0;
var randomNum = Math.floor((Math.random() * 120) + 19);// Goal for the round (random number)
var score = 0 // Score
var randomVal = Math.floor((Math.random() * 12) + 1);// Value of each items 

function reset() {
    var newRandomNum = Math.floor((Math.random() * 120) + 19);
    $(".random-number").html(randomNum);
    var newRandomVal = Math.floor((Math.random() * 12) + 1);
    $("")
}

//create a function to start/reset the game
        // Update wins on the page
        // Update losses on the page
        // create a new random number between 19 and 120
        // Update random number on the page
        // create new values for each crystal between 1 and 12
        // Assign each value to a crystal
        // reset score to 0

//create a function to test win.lose
  // If score  === goal 
            // wins ++
            // call reset function
        // If score > goal
            // losses ++
            // call reset function

// create a click event
    // grab the value of the item that clicked on 
    // Add that to the players score
    // call win/loss

    $(document).ready(function() {
    });
        