//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["AYESHA", "SOHA", "FARWA", "MISBAH", "MEHAK"];
var new_users = ["FAREEHA", "NASHRA", "SOHA", "HANIAH", "FARWA"];
new_users.forEach(function (new_one_user) {
    var condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (condition) {
        console.log("SORRY ".concat(new_one_user, " IS ALREADY TAKEN!"));
    }
    else {
        console.log("THIS USERNAME ".concat(new_one_user, " IS AVAILABLE"));
    }
});
