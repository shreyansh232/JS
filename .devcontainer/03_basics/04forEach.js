const arr = [1,2,3,4,5];

// arr.forEach(function (val) {
//             console.log(val);
// })
arr.forEach( (val) => {
    console.log(val);
})

function printMe(val){
    console.log(val);
}
arr.forEach(printMe)

arr.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const teams = [

    {
        teamName: "Redbull",
        teamPrincipal: "Christian Horner"
    },
    {
        teamName: "Merc",
        teamPrincipal: "Toto"
    },
    {
        teamName: "Ferrari",
        teamPrincipal: "Fred"
    },
]


teams.forEach((item) => {
    console.log(item.teamName) //Item is an object

}
)