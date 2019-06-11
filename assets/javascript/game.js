//Global variables
var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNumber;
var randomCrystalOne;
var randomCrystalTwo;
var randomCrystalThree;
var randomCrystalFour;

//Random Number Variables
randomNumber = Math.floor((Math.random() * 102) + 19);
randomCrystalOne = Math.floor((Math.random() * 11) + 1);
randomCrystalTwo = Math.floor((Math.random() * 11) + 1);
randomCrystalThree = Math.floor((Math.random() * 11) + 1);
randomCrystalFour = Math.floor((Math.random() * 11) + 1);

//Random Number Generator
$(document).ready(function () {

    $("#random").html(randomNumber);
    $("#fieldOne").attr("crystalValue", randomCrystalOne);
    $("#fieldTwo").attr("crystalValue", randomCrystalTwo);
    $("#fieldThree").attr("crystalValue", randomCrystalThree);
    $("#fieldFour").attr("crystalValue", randomCrystalFour);

});
function resetGame() {
    totalScore = 0;
    $("#totalScore").text(totalScore);
    randomNumber = Math.floor((Math.random() * 102) + 19);
    $("#random").html(randomNumber);
    randomCrystalOne = Math.floor((Math.random() * 11) + 1);
    randomCrystalTwo = Math.floor((Math.random() * 11) + 1);
    randomCrystalThree = Math.floor((Math.random() * 11) + 1);
    randomCrystalFour = Math.floor((Math.random() * 11) + 1);
    $("#fieldOne").attr("crystalValue", randomCrystalOne);
    $("#fieldTwo").attr("crystalValue", randomCrystalTwo);
    $("#fieldThree").attr("crystalValue", randomCrystalThree);
    $("#fieldFour").attr("crystalValue", randomCrystalFour);
    

};

//***Psuedo Code***
//Hide randomCrystalX numbers

//Freeze Random Number Generator until game ends

//Game ends when a user's crystal clicks add up to the randomNumber or exceeds it

//Add user's crystal clicks until user's crystal clicks add up to the randomNumber or exceeds it

//Display clicks in span id="totalScore"

//If user's click equal randomNumber then add 1 to <span id="wins" and reset game

//If user's clicks exceeds randomNumber then add 1 to <span id=losses and reset game

//Reset game by choosing a new randomNumber, randomCrystalOne, randomCrystalTwo, randomCrystalThree and randomCrystalFour


$(".crystal").click(function () {
    console.log();
    var hiddenValue = Number($(this).attr("crystalValue"));
    console.log(hiddenValue);
    totalScore = totalScore + hiddenValue;
    //Compare totalScore with randomNumber
    if (totalScore < randomNumber) {
        //Display totalScore
        $("#totalScore").text(totalScore);


    } else if (totalScore > randomNumber) {
        losses = losses + 1;//losses++
        $("#losses").text(losses);
        resetGame();
        console.log("newRandomNumber", randomNumber)

    }
    else if (totalScore === randomNumber) {
        wins = wins + 1;//wins++
        $("#wins").text(wins);
        console.log("win");
        resetGame();
        console.log("newRandomNumber", randomNumber)
    }

})





