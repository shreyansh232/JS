// singleton
//Object.ceeate

//object literals

const mySym = Symbol("key1");
const user = {
    name: "Max",
    age: 25,
    [mySym]: "key1",
    location: "Netherlands",
    email: "Max@redbull.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday", "Saturday"],

}
console.log(user.email);
console.log(user["email"]);
console.log(typeof user.mySym);
console.log(user[mySym]);

user.name = "Nyck De Vries";
console.log(user);

// Object.freeze(user); //Now the data stored in the object can't be modified
user.name = "Max";
console.log(user.name);

user.racing = function(){
    console.log("We are racing");
}
console.log(user.racing);
console.log(user.racing());

user.racing2 = function(){
    console.log(`We are racing, ${this.name}`);
}
console.log(user.racing2());

