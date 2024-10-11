//for of operator
// ["","",""]
// [{},{},{}]

let arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(`value of array is ${num}`);
    
}

let greeting = "Hello world!"
for (const greet of greeting) {
    if(greet == " ")
        continue
   // console.log(`each string is ${greet}`);
    
}

//map

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

console.log(map);

for (const [key,value]  of map) {

    console.log(key, ':-' , value);
    
    
}