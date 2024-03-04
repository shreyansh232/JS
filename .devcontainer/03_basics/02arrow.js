const user = {
    username: "Shreyansh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
    }

}

user.welcomeMessage();
user.username = "Something";
user.welcomeMessage();
console.log(this);


// function some(){
//     let username = "Shrey";
//     console.log(this.username);
// }
const some = () => {
    let username = "Shrey";
    console.log(this);
}

some();

// const addTwo = (num1, num2) =>{
//     return num1 + num2; // return is needed when using curly braces
// }
// const addTwo = (num1, num2) => (num1 + num2);//no need of using return for this
const addTwo = (num1, num2) => ({username:"shreyansh"}); //Objects are returned inside of paranthesis
console.log(addTwo(1,2));