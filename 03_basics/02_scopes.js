let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30  // do not user Var
    console.log("INNER:",a);
    
}
console.log("OUTER:",a);


function one(){
    const userName = "Shahid"
    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website);  // cannot accessed outside the func block
     two()
}
 one()


 if (true){
    const Username ="Shahid"
    if(Username === "Shahid" ){
        const WebSite = " youtube"

        console.log(Username+WebSite);
        
    }
    //console.log(WebSite);  // 
 }
 //console.log(Username);
 
 // +++++++++++++++++++++++++++++++++++++++++++++++ INTRESTING ++++++++++++++++++++++++++++++++++++++++++++++

 addone(6) //can be executed anywhere

 function addone(num){
    return num+1
 }
 
 //addtwo(5)  // will throw error ,function stored in variable cannot be executed before maian function line
 const addtwo = function(num){
    return num+1
 }
addtwo(5)
 
 