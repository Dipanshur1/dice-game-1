var randomNum1 = Math.floor(Math.random()*6) +1;
var randonImage = "dice" + randomNum1 + ".png";
var randonImageSource = "images/" + randonImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randonImageSource);
 
var randomNum2 = Math.floor(Math.random()*6) +1;
var randonImageSource2 = "images/dice" + randomNum2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src",randonImageSource2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML= "player 1 win";

}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").innerHTML= "player 2 win";
    
}
else{
    document.querySelector("h1").innerHTML= "draw";
    
}