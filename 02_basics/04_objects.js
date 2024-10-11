  //const facebook = new object // singletone

  const tinderUser = {}

  tinderUser.id = "28abc"
  tinderUser.name = "Shahid"
  tinderUser.isLoggedIn = false

 // console.log(tinderUser);
  
  const regularUser = {
    email : "shahid@manga.com",
    fullName : {
        userFullName : { 
        firstName : "Shahid",
        lastName :"Aftab"
    }
  }
}

//console.log(regularUser.fullName);

const obj1 = { 1 : "a", 2: "b"}
const obj2 = { 3 : "c", 4: "d"}

//const obj3 = Object.assign(obj1,obj2) // Object.assign(target,source)  
//console.log(obj3);
 
const obj3 = { 4 : "e", 5: "f"}

const obj4 = Object.assign({},obj1,obj2,obj3)

console.log(obj4);
//to spread the object
console.log({...obj1,...obj2,...obj3});


