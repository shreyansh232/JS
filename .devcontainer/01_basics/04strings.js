const name = "Shreyansh";
const repoCount = 50;
console.log(`Hey my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String("Shreyansh"); //object
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
const newString = gameName.substring(0,4);
console.log(newString);
const anotherString = gameName.slice(-8,4);
console.log(anotherString);
const newStringOne = "     shreyansh   ";
console.log(newStringOne);
console.log(newStringOne.trim());//removes blank spaces
const url = "https://shreyansh.com/shreyansh%20pandey";
console.log(url.replace('%20', '-'));
console.log(url.includes('someone'));// checks if "someone" is in the string 











