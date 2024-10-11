// singleton -->> object.create()

//object literals

const mySym = Symbol("key1")

const JsUser = {
    "full Name" : "shahid Aftab",
    name : "Shahid",
    age : 10,
    email : "shahid@yahhoo.com",
    location : "howrah",
    [mySym] : "mykey1",
    isLoggedIn : false,
    lastLoggedIn : ["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); //prerferred
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "shahid@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "shahid@microsoft.com"

// console.log(JsUser);

JsUser.greeting=function(){ 

console.log("hello Js user");

}

JsUser.greetingTwo = function(){

    console.log(`Hello js user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
