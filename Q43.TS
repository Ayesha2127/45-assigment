//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians: string[]= ["WASEEM" , "BILAL" ,"JUNAID"];
function Make_great(magicians: string[]) : string[] {
    let greatMagicians:string[] = [];
    magicians.forEach((magicians) => {
        greatMagicians.push(`${magicians} the Great`);
    });
    return greatMagicians
}

function show_magicians(magicians: string[]) {
    magicians.forEach((magicians) => {
        console.log(magicians);
    });
}

let greatMagicians = Make_great(magicians.slice());
console.log("Original Magicians");
show_magicians(magicians);
console.log("greatMagicians");
show_magicians(greatMagicians);