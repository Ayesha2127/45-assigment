//LOWERCASE
var personName = "ayesha";
console.log("lowercase:", personName.toLowerCase());
//UPPERCASE
console.log("uppercase:", personName.toUpperCase());
//TITLECASE
console.log("titlecase:", personName.replace(/\bw/, function (c) { return c.toUpperCase(); }));
