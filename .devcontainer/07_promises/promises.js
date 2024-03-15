const promiseOne = new Promise(function(resolve, reject){
    //Any async task
    //DB calls, network calls
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)

});

promiseOne.then(function(){
    console.log("Promise consumed");
});

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({"username" : "Shreyansh", email: "Shreyansh487@gmail.com" })
    }, 1000)


})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
    let error = true;
    if(!error){
        resolve({username: "Shreyansh", password: "12334"});
    }
    else{
        reject('ERROR');
    }
 }, 1000) 
})



// This kind of using then after then is called as chaining

promiseFour
.then((user) => {
    console.log(user);
    return user.username;

}).then((username)=>{
    console.log(username);

}).catch(function(error){
    console.log(error);

}).finally(() => console.log('Either promise resolved or rejected')); //This will always execute after all of this


 const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Javascript", password: "12334"});
        }
        else{
            reject('ERROR: JS went wrong');
        }
     }, 1000) 
 });


 async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }

 }
 consumePromiseFive();



//  async function getAllUsers(){
//     try{const response = await fetch('https://api.github.com/users/shreyansh232');
//     const data = await response.json();
//     console.log(data);
//  }
//     catch(error){
//         console.log("E:", error);

//     }
//  }

//  getAllUsers();




fetch('https://api.github.com/users/shreyansh232')
.then((response) => {
    return response.json();

})
.then((data) => {
   console.log(data); 
})
.catch((error) =>{
    console.log(error);


})