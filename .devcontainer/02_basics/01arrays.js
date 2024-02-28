const nums = [1,2,4,5,6,7];
console.log(nums[0]);

const nos = new Array(1,2,3,4,5,6);

//Array Methods

nums.unshift(0); //shifts all the values to the right and adds 0 at the start
nums.push(8);
nums.shift();
nums.pop();

console.log(nums);
console.log(nums.includes(8));

const newArr = nums.join();
console.log(nums);
console.log(typeof newArr);


//slice, splice

console.log("A ", nums);
const s = nums.slice(1,3);//it doesn't modify the array after slicing

console.log(s);
console.log("B ", nums); 

const t = nums.splice(1,3);// splice takes out the part of the array and modifies the array
console.log("C ", nums);
console.log(t);