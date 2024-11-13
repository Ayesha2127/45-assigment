//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var Magicians = ["WASEEM", "BILAL", "JUNAID"];
function show_magicians(Magicians) {
    Magicians.forEach(function (Magicians) {
        console.log(Magicians);
    });
}
function Make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "THE GREAT";
    }
}
Make_great(Magicians);
show_magicians(Magicians);
