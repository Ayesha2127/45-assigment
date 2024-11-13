//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.

let alien_color = "GREEN";

//TEST 1:
if(alien_color === "GREEN"){
    console.log("Alien colour is GREEN player just earned 5 points.");
}

//TEST 2:
if(alien_color === "PURPLE"){  //=> condition became false that's whyy it is'nt printed in cmd.
    console.log("Alien colour is PURPLE");
}