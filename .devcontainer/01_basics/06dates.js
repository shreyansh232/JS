let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2024, 1, 28);
let myCreatedDate = new Date("2024-01-28");


console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

console.log(myDate.getMonth() + 1);
console.log(myDate.getDay());


myDate.toLocaleDateString('default', {
    weekday: "long",

});


