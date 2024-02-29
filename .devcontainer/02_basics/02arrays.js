const chess = ["magnus", "vidit", "hikaru"];

const f1 = ["Max", "Lando", "Alonso"];

// chess.push(f1);
// console.log(chess);
// console.log(chess[3][1]);

const a = chess.concat(f1);
console.log(a);

const b = [...chess, ...f1]; //spreads and makes each of the array element individual. Used for merging different arrays together.
console.log(b);

const abc = [1,2,3, [2,4,5,56], 2342,3432,235423,211, [234,66,44,32]]; 
console.log(abc.flat(Infinity)); //flat also spreads out the array

console.log(Array.isArray("Jung"));
console.log(Array.from("Freud"));
console.log(Array.from({name: "Shazam"})); //Important to remember


let points1 = 500;
let points2 = 300;
let points3 = 100;

console.log(Array.of(points1, points2, points3)); //takes in variables values and then converts them into an array







