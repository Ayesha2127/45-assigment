//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let birds = ["sparrow" , "eagle" , "crow" , "parrot" , "flamingo"]

//• Tests for equality and inequality with strings
console.log("\n Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\n Is apple is not equal to apple?");
console.log(apple!= "apple");

//• Tests using the lower case function
console.log("\n Is APPLE is equal to apple after converting it to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

//• Numerical tests 
                  //EQUALITY:
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
                 //INEQUALITY:
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);
                 //GREATER THAN:
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);
                 //LESS THAN:
console.log("\n Is twenty is less than ten?");
console.log(twenty < 10);
                 //GREATER THAN OR EQUAL TO:
console.log("\n Is ten is greater than or equal to five?");
console.log(ten >= 5);
                //LESS THAN OR EQUAL TO:
console.log("\n Is twenty is less than or equal to ten?");
console.log(twenty <= 10);
    
//• Tests using "and" and "or" operators
                 //AND
console.log("\n Twenty is not equal to 10 and twenty is greater than ten");
console.log(twenty != 10 && twenty > 10);
console.log("\n Twenty is not equal to 10 and twenty is greater than ten");
console.log(twenty != 10 && twenty > 30);

                //OR
console.log("\n Twenty is greater than fifty or twenty is equal to twenty");
console.log(twenty > 50 || twenty == 20);  
console.log("\n Twenty is greater than fifty or twenty is equal to twenty");
console.log(twenty > 50 || twenty != 20 );

//• Test whether an item is in a array
console.log("\n Is sparrow is include in my birds array?");
console.log(birds.includes("birds"));

//• Test whether an item is not in a array
console.log("\n Is sparrow not include in my birds array?");
console.log(!birds.includes("birds"));