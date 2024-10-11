// Immediately Invoked Function Expression
// global scope k pollution se problem hoti hai,global scope k jo bhi variables ya declaration ko hatane k lie IIFE k use rkte haiii

(function chai(){
  //Named IIFE
    console.log("DB 1 connected");
    
}) ();  // to write two IIFE togather make sure terminate the first first IIFE with semi-colone

( () => {
    //UnNamed IIFE using Arrow
      console.log("DB 2 connected");
      
  }) ();

  ( (name) => {
    //UnNamed IIFE passing parametter using ARROW
      console.log(`DB 3 connected as ${name}`);
      
  }) ("Shahid")