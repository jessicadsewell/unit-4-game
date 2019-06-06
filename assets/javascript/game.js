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

$(document).ready(function () {
    //create variables to track 

    var wins = 0;
    var losses = 0;
    var score = 0 // users score

    var randomNum = Math.floor((Math.random() * 101) + 19);// Goal for the round (random number)

    $("#random-number").text(randomNum);

    //Variables for 4 random numbers
    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);

    
    
    //create a function to start/reset the game
    function reset() {
        randomNum = Math.floor(Math.random() * 101 + 19); // create a new random number between 19 and 120
        console.log(randomNum)
        $("#random-number").text(randomNum); // Update random number on the page
        num1 = Math.floor(Math.random() * 11 + 1); // create new values for each food item between 1 and 12
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        score = 0; // reset score to 0
        $("#totalScore").text(score);
        // Assign each value to a crystal
    };
    
    reset();
    // Update wins on the page
    // Update losses on the page
    
    //create a function to test win.lose
    function result() {
        if (score === randomNum) {// If score  === goal 
            alert("You won!");
            wins++;
            $("#wins-text").html("<h3>Wins: </h3>" + wins);
            reset(); // call reset function
        } else if (score > randomNum) {// If score > goal
            alert("You lost this time!")
            losses++;
            $("#losses-text").html("<h3>Losses: </h3>" + losses);
            reset();
            // call reset function
        };
        result();
        
        
        
        // grab the value of the item that clicked on 
        // Add that to the players score
        // call win/loss
        
    }
    $("#fries-img").on("click", function () {
        score = score + num1;
        console.log("New score = " + score);
        $("#totalScore").text(score);
        result();
    })
    
    $("#taco-img").on("click", function () {
        score = score + num2;
        console.log("New score = " + score);
        $("#totalScore").text(score);
        result();
    })
    
    $("#ice-cream-img").on("click", function () {
        score = score + num3;
        console.log("New score = " + score);
        $("#totalScore").text(score);
        result();
    })
    
    $("#sandwich-img").on("click", function () {
        score = score + num4;
        console.log("New score = " + score);
        $("#totalScore").text(score);
        result();
    })
    // create a click event
});