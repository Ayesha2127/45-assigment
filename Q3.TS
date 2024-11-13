//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//LOWERCASE
let PersonName: string = "ayesha"
console.log("lowercase:" , PersonName.toLowerCase());

//UPPERCASE
console.log("uppercase:" , PersonName.toUpperCase());

//TITLECASE
console.log("titlecase:" , PersonName.replace(/\bw/,c => c.toUpperCase()));

