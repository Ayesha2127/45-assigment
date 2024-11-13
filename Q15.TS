//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.


var guest_list : string [] = [`AYESHA` , `SOHA` , `FARWA` , `MISBAH` , `MEHAK`]
for(let i=0; i<guest_list.length; i++){
    console.log(` Respected Ms ` + guest_list[i] + `,\n\n we invited you on a dinner tommorrow.\n\n Thankyou`)
}
 var not_present : string = `MEHAK`;
 var new_guest : string = `ZAINAB`;
 guest_list[4] = new_guest
 for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Ms` + guest_list[i] + `,\n\n we invited you on a dinner tommorrow.\n\n Thankyou`)
}
console.log(`Ms. ${not_present} will not come in tommorrow dinner.`)