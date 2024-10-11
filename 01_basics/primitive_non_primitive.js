
//Stack(premitive); //Heap (non-premitive)

//premitive values goes to stack and returns always a copy
let myYTname = "shahidaftab"
let anotherName = myYTname
anotherName = "chaiaurcode"
console.log(myYTname);
console.log(anotherName);

// Non primitive values goes to Heap and returns reference that means whatever may or may not be happen it will be in orignal value

let userOne = {

    Email : "shahidaftab028@gmail.com"
    
}

let userTwo = userOne

userTwo.Email = "shahid@google.com"


console.log(userOne.Email);
console.log(userTwo.Email);













