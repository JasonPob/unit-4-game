

//variables
var wins = 0;
var losses = 0;
var targetNum = 0;
gameReset = function(){
var currentScore = 0;
var images = ["assets/images/fireStone.jpg", "assets/images/waterStone.jpg", "assets/images/shinyStone.jpg", "assets/images/thunderStone.jpg"];
//dynamic relying on # of images
var numberOptions = new Array(images.length);
$("#losses").html("Losses: " + losses);
$("#wins").html("Wins: " + wins);


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
        wins++
        alert("You win!");
        $("#crystals").empty();
        gameReset();
       
    }
    else if (currentScore >= targetNum) {
        losses++
        alert("You lose!")
        $("#crystals").empty();
        gameReset();
    }

});// end of click event
}
gameReset();

