var targetNum = 0;
var currentScore = 0;
var numberOptions = new Array(4);
var images = ["assets/images/fireStone.jpg", "assets/images/waterStone.jpg", "assets/images/leafStone.jpg", "assets/images/thunderStone.jpg"]

//print instructions
// var instructions = "You will be given a random number at the start of the game. There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score. You win the game by matching your total score to the target score provided. You lose the game when total score goes above the target score.";
// $("#instructions").html(instructions);

//randomly generate number for targetNum
var min = 19;
var max = 120;
var targetNum = Math.floor(Math.random() * (+max - +min)) + +min;
$("#targetScore").html("Target Score: " + targetNum);

// var crystalvalue 
var crystalvalue = 0;
//create 4 crystals 
for (var i = 0; i < numberOptions.length; i++) {
    //each iteration create a img tag for crystal 
    var imageCrystal = $("<img>");
    //assign a class for each crystal 
    imageCrystal.addClass("crystal-image");
    //add src link to img
    imageCrystal.attr("src", images[i]);
    //randomly generate number value for individual crystals
    var minCrystalValue = 1;
    var maxCrystalValue = 12;
    crystalvalue = Math.floor(Math.random() * (+maxCrystalValue - +minCrystalValue)) + +minCrystalValue;
    numberOptions[i] = crystalvalue;
    //give number value to array value through data attribute
    imageCrystal.attr("data-crystalvalue", numberOptions[i])
    //add new values to page 
    $("#crystals").append(imageCrystal);
    // add current score to html
    $("#currentScore").html("Current Score: " + currentScore);

    
} // end of for loop


//apply click function to every crystal
$(".crystal-image").on("click", function () {
    crystalvalue = ($(this).attr("data-crystalvalue"));
    crystalvalue = parseInt(crystalvalue);
    currentScore += crystalvalue;

    // add current score to html
    $("#currentScore").text("Current Score: " + currentScore);

    //win/loss conditions
    if (currentScore === targetNum) {
        alert("You win!");
    }
    else if (currentScore >= targetNum) {
        alert("You lose!")
    }

});// end of click event


