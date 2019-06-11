//Global variables
var wins = 0;
var losses = 0;
var totalScore = "";
var crystalOne = "";
var crystalTwo = "";
var crystalThree = "";
var crystalFour = "";


//Random Number Variables
var randomNumber = Math.floor((Math.random() * 102) + 19);
var randomCrystalOne = Math.floor((Math.random() * 11) + 1);
var randomCrystalTwo = Math.floor((Math.random() * 11) + 1);
var randomCrystalThree = Math.floor((Math.random() * 11) + 1);
var randomCrystalFour = Math.floor((Math.random() * 11) + 1);

//Random Number Generator
$(document).ready(function () {

    $("#random").html(randomNumber);
    $("#fieldOne").html(randomCrystalOne);
    $("#fieldTwo").html(randomCrystalTwo);
    $("#fieldThree").html(randomCrystalThree);
    $("#fieldFour").html(randomCrystalFour);

});
//***Psuedo Code***
//Hide randomCrystalX numbers

//Freeze Random Number Generator until game ends

//Game ends when a user's crystal clicks add up to the randomNumber or exceeds it

//Add user's crystal clicks until user's crystal clicks add up to the randomNumber or exceeds it

//Display clicks in span id="totalScore"

//If user's click equal randomNumber then add 1 to <span id="wins" and reset game

//If user's clicks exceeds randomNumber then add 1 to <span id=losses and reset game

//Reset game by choosing a new randomNumber, randomCrystalOne, randomCrystalTwo, randomCrystalThree and randomCrystalFour

var crystalValue = 0;

function getRandomNumber() {

};





