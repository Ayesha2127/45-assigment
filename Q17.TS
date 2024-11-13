//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

var guest_list : string [] = [`AYESHA` , `SOHA` , `FARWA` , `MISBAH` , `MEHAK`]
 var not_present : string = `MEHAK`;
 var new_guest : string = `ZAINAB`;
 guest_list[4] = new_guest
 guest_list.unshift(`AIMEN` , `SIDRA` , `FAREEHA`)
 console.log(`\n unfortunately we can't arrange big table, only two guest are allowed`)
 while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry Ms.${remove_guest} you're not invited for tommorrow dinner`);
 }
 for(let i=0; i<guest_list.length; i++){
    console.log(` Respected Ms ` + guest_list[i] + `,\n\n yes you're still invited for tommorrow dinner.\n\n Thankyou`)
}

guest_list.splice(0,4)
console.log(guest_list)
