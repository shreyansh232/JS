const coding = ["Java", "Python", "Ruby", "Mojo"];

const values = coding.forEach((item)=>{
    console.log(item);
    return item;

})
console.log(values);


const nums = [1,2,3,4,5,6]

let myNums = nums.filter((num) => num > 4 ); // no need of a return statement without curly braces around the function
console.log(myNums);

// const noms = nums.map((item) => item )
const noms = nums.map((item) => item * 10 ).map((item)=> item + 1 ).filter((num) => num >= 50) //chaining 


console.log(noms)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((bk) => bk.genre === 'History')
userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === 'History'})
console.log(userBooks);




const numbers = [1,2,3]
const myTotal = numbers.reduce(function(acc, curVal){ //Used to summation
  console.log(`acc: ${acc} and curVal: ${curVal}`);
  return acc + curVal
},0) //intial value of the accumulator i.e 0 here

console.log(myTotal);


const shoppingCart = [
  {
    itemName: "Pen",
    price: 299
  },
  {
    itemName: "Book",
    price: 599
  },
  {
    itemName: "Notepad",
    price: 199
  },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);