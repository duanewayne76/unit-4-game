//Global variables
var wins = 0;
var losses = 0;
var totalScore = "";
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;


//Random Number Variables
var randomNumber = Math.floor((Math.random() * 102) + 19);
var randomCrystalOne = Math.floor((Math.random() * 11) + 1);
var randomCrystalTwo = Math.floor((Math.random() * 11) + 1);
var randomCrystalThree = Math.floor((Math.random() * 11) + 1);
var randomCrystalFour = Math.floor((Math.random() * 11) + 1);
//console.log(randomNumber)
//document.getElementById("random").HTML;
//document.write(randomNumber)

//Random Number Generator
$(document).ready(function () {

    $("#random").html(randomNumber);
    $("#fieldOne").html(randomCrystalOne);
    $("#fieldTwo").html(randomCrystalTwo);
    $("#fieldThree").html(randomCrystalThree);
    $("#fieldFour").html(randomCrystalFour);

});


function myGame() {

}
//console.log(randomNumber.textContent)
        //randomNumber.textContent = userGuess.join(", ")

//document.write(randomNumber)