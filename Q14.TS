//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var guest_list : string [] = [`AYESHA` , `SOHA` , `FARWA` , `MISBAH` , `MEHAK`]
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Ms` + guest_list[i] + `,\n\n we invited you on a dinner tommorrow.\n\n Thankyou`)
}
