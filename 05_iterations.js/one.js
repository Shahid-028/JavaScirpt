// for loop
// SYNTAX OF FOR LOOP
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// fro loop simple using if
for(let i =0;i<=10;i++){
    const element = i
    if(element == 5){
        console.log("the element is 5");
        
    }
    console.log(element);
    
}

// using nested for loops
for (i=0;i<=10;i++){
   // console.log(i);
    
    for(j=0;j<=10;j++){
 //console.log(`${j} in ${i}`);

    }
}

//printing 1 to 10 table
for (i=1;i<=10;i++){
     
     for(j=1;j<=10;j++){
  console.log(i+ "*" +j+ "=" +i*j);
 
     }
 }
 
// for loop uing Array.length
 let myArray = ["tony","peter","harry"]
 console.log(myArray.length);
 
 for (let i = 0; i< myArray.length; i++) {
    const element = myArray[i]
    console.log(element);
    
 }
 // keyword use =>>> break and continue

//break
 for (let index = 0; index < 10; index++) {
    const element = index;
    if(index == 5){
        console.log("executed");
        break;
    }
    console.log("value of i is ", index);
    
 }

 //continue

 for (let index = 0; index < 10; index++) {
    const element = index;
    if(index == 5){
        console.log("skipped the 5");
        continue;
    }
    console.log("value of i is ", index);
    
 }