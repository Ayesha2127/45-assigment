var guest_list = ["AYESHA", "SOHA", "FARWA", "MISBAH", "MEHAK"];
var not_present = "MEHAK";
var new_guest = "ZAINAB";
guest_list[4] = new_guest;
guest_list.unshift("AIMEN", "SIDRA", "FAREEHA");
console.log("\n unfortunately we can't arrange big table, only two guest are allowed");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry Ms.".concat(remove_guest, " you're not invited for tommorrow dinner"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log(" Respected Ms " + guest_list[i] + ",\n\n yes you're still invited for tommorrow dinner.\n\n Thankyou");
}
guest_list.splice(0, 4);
console.log(guest_list);
