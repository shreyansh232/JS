let score = "100";
let score1 = "100abc"
console.log(typeof(score));
console.log(typeof(score1));
let valueInNumber1 = Number(score1);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber1);

//"100" gets converted to 100
// "100abc" gets converted to NaN
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log((booleanIsLoggedIn));

// 1 => true; 0 => false
//"" => false;
//"string" => true;


//OPERATIONS
console.log("1" + 98);
console.log(65 + "98");
console.log("98" + 93 + 78);//all string
console.log(98 + 93 + "78");//addition of 98+93 and then 78 is concatenated

