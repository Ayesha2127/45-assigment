//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var userName = ["AYESHA", "SOHA", "FARWA", "ADMIN", "MISBAH"];
userName = [];
if (userName.length === 0) {
    console.log("YOUR ARRAY IS EMPTY ,WE NEED FIND SOME USERS.");
}
else
    [
        //using ForEach loop in array:
        userName.forEach(function (oneUser) {
            if (oneUser === "ADMIN") {
                console.log("HELLO ".concat(oneUser, ", ADMIN,WOULD YOU LIKE TO SEE A STATUS REPORT?"));
            }
            else {
                console.log("HELLO ".concat(oneUser, ",THANKYOU FOR LOGGING IN AGAIN"));
            }
        })
    ];
