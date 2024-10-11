const myNum= [1,2,3,4,5,6,7,8,9,10]
 const newNum = myNum.map( (num) => {  // use of map() 
    return num +10
 }
) 
//console.log(newNum);


//chaining =>>>>> 

const myVal = [1,2,3,4,5,6,7,8,9,10] 

const newVal = myVal.map( (num) => num*10 ).map( (num) => num+1).filter( (num) => num>=40)

console.log(newVal);
