var guest_list = ["AYESHA", "SOHA", "FARWA", "MISBAH", "MEHAK"];
var not_present = "MEHAK";
var new_guest = "ZAINAB";
guest_list[4] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + ",\n\n we invited you on a dinner tommorrow.\n\n Thankyou");
}
console.log("Ms. ".concat(not_present, " will not come in tommorrow dinner."));
guest_list.unshift("AIMEN", "SIDRA", "FAREEHA");
for (var i = 0; i < guest_list.length; i++) {
    console.log(" Respected Sir/Madam " + guest_list[i] + ",\n\n we invited you on a dinner tommorrow.\n\n Thankyou");
}
