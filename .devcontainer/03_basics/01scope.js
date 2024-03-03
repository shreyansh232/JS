function one(){
    const name = "Shreyansh";
    function two(){
        const website = "github";
        console.log(name);
    }
    // console.log(website); website is not a global variable. Defined inside a function, that's why it's function scoped.
    two();
}
one();

if(true){
    const name = "Pandey";
    if(name === "Pandey"){
        const website = " Github";
        console.log(name + website);
    }
    // console.log(website);
}

// console.log(name);




console.log(addOne(5));// This would work
function addOne(num){
    return num + 1;

}
// addOne(5);

console.log(addTwo(5));// This won't work as function is declared in an expression
const addTwo = function(num){
    return num + 2;

}

// addTwo(5);