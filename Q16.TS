//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guest_list : string [] = [`AYESHA` , `SOHA` , `FARWA` , `MISBAH` , `MEHAK`]
 var not_present : string = `MEHAK`;
 var new_guest : string = `ZAINAB`;
 guest_list[4] = new_guest
 for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Ms` + guest_list[i] + `,\n\n we invited you on a dinner tommorrow.\n\n Thankyou`)
}
console.log(`Ms. ${not_present} will not come in tommorrow dinner.`)

guest_list.unshift(`AIMEN` , `SIDRA` , `FAREEHA`)
for(let i=0; i<guest_list.length; i++){
    console.log(` Respected Ms` + guest_list[i] + `,\n\n we invited you on a dinner tommorrow.\n\n Thankyou`)
}