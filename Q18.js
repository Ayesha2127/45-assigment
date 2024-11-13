var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Think of at least five places in the world you’d like to visit.
//Store the locations in a array. Make sure the array is not in alphabetical order.
//Print your array in its original order.
var places = ["THAILAND", "SAUDIAARABIA", "MALAYSIA", "INDIA", "GREECE"];
console.log("original Order :" + places);
////Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical Order :" + __spreadArray([], places, true).sort());
//Show that your array is still in its original order by printing it.
console.log("original Order :" + places);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order :" + __spreadArray([], places, true).sort().reverse());
//Show that your array is still in its original order by printing it again.
console.log("Original Order :" + __spreadArray([], places, true).sort().reverse());
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse Order :" + places.sort());
//Reverse the order of your list again. Print the list to show it’s back to its original order
console.log("Original Order :" + places.sort().reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetical Order :" + places.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
console.log("Reverse Alphabetical Order :" + places.sort().reverse());
