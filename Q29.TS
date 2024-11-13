//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits = ["ORANGE" , "STRAWBERRY" ,"LYCHEE"];

//STATEMENT 1:
if (favorite_fruits.includes("ORANGE")) {
    console.log("I REALLY LIKE ORANGE");  
}
//STATEMENT 2:
if(favorite_fruits.includes("STRAWBERRY")){
    console.log("I REALLY LIKE STRAWBERRY");
}
//STATEMENT 3:
if(favorite_fruits.includes("FALSA")){
    console.log("I REALLY LIKE FALSA");
}
//STATEMENT 4:
if(favorite_fruits.includes("LYCHEE")){
    console.log("I REALLY LIKE LYCHEE")
}
//STATEMENT 5:
if(favorite_fruits.includes("BANANA")){
    console.log("I REALLY LIKE BANANA")
}
