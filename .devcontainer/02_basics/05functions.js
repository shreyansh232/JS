function loginUserMessage(username = "Lewis Hamilton"){ //Default value
     if(!username/*username === undefined*/){
        console.log("Please enter a name");
        return;
    }
    return `${username} logged in`;

}

console.log(loginUserMessage("Charles Leclerc"));

// function calculatePrice(...num){ //rest operator
//     return num;
// }
// console.log(calculatePrice(100,200,300,600));


function calculatePrice(value1, value2, ...num){
    return num;
}
console.log(calculatePrice(100,200,300,600));

const users = {
    username: "Shreyansh",
    id: 100
}
function userInfo(anyobject) {
    console.log(`${anyobject.username} is my name and ${anyobject.id}`);

}
// userInfo(users);
userInfo(
    {
        username:"Pandey",
        id: 544
    }
);
const num = [1,2,3,4,5];

function returnNums(getArray){
    return getArray[1];
}
// console.log(returnNums(num));
console.log(returnNums([1,2,3,4,5]));
