//Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
//• If the person is less than 2 years old, print a message that the person is a baby.
//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
//• If the person is age 65 or older, print a message that the person is an elder.
var age = 20;
//STAGE:1
if (age < 2) {
    console.log("THE PERSON IS A BABY");
}
//STAGE:2
else if (age >= 2 && age < 4) {
    console.log("YOU ARE A TODDLER");
}
//STAGE:3
else if (age >= 4 && age < 13) {
    console.log("THE PERSON IS A KID");
}
//STAGE:4
else if (age >= 13 && age < 20) {
    console.log("THE PERSON IS A TEENAGER");
}
//STAGE:5
else if (age >= 20 && age < 65) {
    console.log("THE PERSON IS AN ADULT");
}
//STAGE:6
else if (age >= 65) {
    console.log("THE PERSON IS AN  OLDER");
}
