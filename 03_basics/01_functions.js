
     
function AddTWoNumbers(number1, number2){ 
   console.log(number1+number2);
   
}
AddTWoNumbers(3,8) 

function AddAnotherNumbers(number1, number2) {
          console.log(number1+number2);
}
 const result = AddAnotherNumbers(10,11)
  console.log("result:", result);
  
  // use of return

function Add(number1, number2) {
    let rslt = (number1+number2)
    return rslt
    console.log("shahid");  // nothing will be executed after using return 
    
}
 rslt = Add(10,11)
console.log("result:", rslt);
 

function LogInMessage(username){
    if(!username){  //(username === undefined) this also can be written
    console.log("please enter a username");
     //return
    }
    return `${username} just logged in`

}
console.log(LogInMessage());  //if yout blank the username as argument output will be undefined 


//rest operator (...)

function CalculateCartPrice(...num1)
{
  return num1
}
//console.log(CalculateCartPrice(100,200,300));

function ValueCartPrice(val1,val2,...num1)
{
  return num1
}
console.log(ValueCartPrice(100,200,300,500,800));

// function using Object
const user = {
    name : "Shahid",
    price : 399
}
function HandleObject(AnyObject)
{
    console.log(`username is ${AnyObject.name} and price of cart is ${AnyObject.price}`);   
}

HandleObject(user)
// function using Array

const newArray = [100.200,600,800]

function returnSecondValue(getArray)
{
    return getArray[2]
}
console.log(returnSecondValue(newArray));
