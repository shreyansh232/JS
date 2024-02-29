//Singleton

const teams = new Object();
teams.id = "RB";
teams.name = "RedBull";
teams.isLoggedIn = false;


// console.log(teams);

const drivers = {
    number: 55,
    fullName: {
        driverFullName: {
            firstName: "Carlos",
            secondName: "Sainz"
        }
    }
}
console.log(drivers.fullName.driverFullName.firstName);

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}

// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const users = [
    {
        id: 1,
        email: "checo@rb.com"
    },
    {
        id: 1,
        email: "checo@rb.com"
    },
    {
        id: 1,
        email: "checo@rb.com"
    },
    {
        id: 1,
        email: "checo@rb.com"
    },
    {
        id: 1,
        email: "checo@rb.com"
    },
];

console.log(users[1].email);
console.log(teams);

console.log(Object.keys(teams)); //Important
console.log(Object.values(teams)); //Important
console.log(Object.entries(teams)); //Important
console.log(Object.hasOwnProperty('isLoggedIn')); //Important


const driver = {
    fullName: "Fernando Alonso",
    age: 44,
    team: "Aston Martin",
    wins: 33,
    from: "Spain"
}


const {fullName: name} = driver; // to destructure
console.log(name);




