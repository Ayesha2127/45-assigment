//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
function make_shirt(size, message) {
    if (size === void 0) { size = "LARGE"; }
    if (message === void 0) { message = "I LOVE TYPESCRIPT"; }
    console.log("Making a ".concat(size, " t.shirt with a message \"").concat(message, "\" printed on it"));
}
make_shirt("lARGE");
make_shirt("MEDIUM");
make_shirt("SMALL", "GIRL CAN DO EVERYTHING");
