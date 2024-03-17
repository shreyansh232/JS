const user = {
    username: "Shreyansh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        // console.log("User details...");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    
    greeting = function(){
        console.log(` Welcome ${this.username} `);
    } 
    return this;
    // return this; Implicitly declared
}

const userOne = new User("Shreyansh", 8, true);
const userTwo = new User("Pandey", 10, false);
console.log(userOne);
console.log(userTwo);