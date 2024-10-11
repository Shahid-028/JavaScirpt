// use of if
const isLoggedIn = true

if(2=="2"){   // better to do with the ""==="" operator
    console.log("logged in");
    
}

// ==, ===, < ,> ,>= ,<= ,!= , !==

const temp = 41
if (temp === 41){
    console.log("temprature is less than 50");
    
} else{
console.log("temprature is greater than 50");
}

const score = 200

if (score > 100){
    let power = "fly"
 console.log(`user power: ${power}`);
 
}

const balance = 1000
if(balance < 500){
    console.log("balance is less than 500");
    }else if(balance<750){
    console.log("balance is less than 750");
    
} else if(balance <900){
    console.log("balance is less than 900");
    
} else {
    console.log("balance is less than or equal to 1000");
    
}


// another example using conditional operator
const userLoggedIn = true
const debitCard = true
const loggedINfromGoogle = false
const loggedINfromEmail = true

if (userLoggedIn && debitCard ){  // both condition should be true to console the value 
    console.log("successfully logged!!");
    
}

if (userLoggedIn || loggedINfromEmail || 2 == 3 ){  // any of one if condition  true, block executed
    console.log("succesfully logged in via Email");
    
}
