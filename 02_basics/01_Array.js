const myArr = [0,1,2,3,4,5]

const myHero= ["loki","Tony Stark","Thor","peter Parker"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr[3]);

// Array methods

//myArr.push(7);
//myArr.pop()
//console.log(myArr);


//myArr.unshift(8)
//console.log(myArr);

//myArr.shift()
//console.log(myArr);

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//             slice,     splice
// slicing does not menupulate the original array
//splicing menupulate the original Array
const mna1 = myArr.slice(1,3);
console.log("A ", mna1);
console.log(myArr);  //After slicing the original array looks

const mna2 = myArr.splice(1,3);
console.log("B ", mna2);

console.log(myArr); // After splicing the original Array looks
 