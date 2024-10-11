//const UserEmail = "shahid.aftab@ai"
const UserEmail = []
//const UserEmail = {}

if(UserEmail){
    console.log("Email got");
    
}else{
    console.log("Email didn't got");
    }
 

    // falsy values  --->>>

    //BigInt,false,0,-0,"",null,undefined,NaN

   //truthy values

   // "0",'false', "Anything in string" ,[],{},function(){}


   if (UserEmail.length == 0){ // we can check string is empty or not
    console.log("string is empty");
    }
const myObj = {}
if(Object.keys(myObj).length == 0){ // we can can check object is empty or not
    console.log("object is empty");
    
}