//Immediately invoked function expressions (IIFE)

//This is done to create a completely separate scope, so that global variables don't pollute the function. Also, it immediatley executes the function.(function)()

(function DB(){ //This is a named iife as it has a function name
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`Name is ${name}`);
})("Shreyansh");

