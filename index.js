var rand1 = Math.floor(Math.random()*6) + 1;
var randomDice1 = "dice" + rand1 + ".png";
var randomImageSource = "images/" + randomDice1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var rand2 = Math.floor(Math.random()*6)+1;
var randomDice2 = "dice" + rand2 + ".png";
var randomImageSource2 = "images/" + randomDice2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(rand1>rand2)
{
    document.querySelector("h1").innerHTML = "🏆Player 1 Wins";
}
else if(rand2>rand1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins🏆";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}