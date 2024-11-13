//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.

let alien_color = "GREEN"
 if (alien_color === "GREEN") {
    console.log("player just earned 5 points for shooting the alien.")
    
 } else {        //=> if condition became true thats why it is'nt printed in cmd and if, if conditon would've been false so else condition would've been printe3d in cmd.
    console.log("player just earned 10 points.")
    
 }

 //version
 if (alien_color === "BLACK") {
   console.log("Alien colour is black");
   
 } else {
   console.log("I've come from other planet");
   
 }