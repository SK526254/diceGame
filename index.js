var diceOne =document.querySelector(".diceOne");
var diceTwo =document.querySelector(".diceTwo");

diceOne.addEventListener("click", function(){
    var randomNumber = Math.floor(Math.random()*6+1);
    
    diceOne.setAttribute("src","images/dice"+randomNumber +".png");
})


diceTwo.addEventListener("click", function(){
    var randomNumber = Math.floor(Math.random()*6+1);
    diceTwo.setAttribute("src","images/dice"+randomNumber +".png");
})




// for player one 

