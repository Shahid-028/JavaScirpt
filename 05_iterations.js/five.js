const coding = ["ruby","python","lang","swift","R"]
// function csll back
 coding.forEach(function (val){
//     console.log(val);
    
 })

// using => function
coding.forEach( (item) => {
    //console.log(item);
    
})

function printMe(item){
    //console.log(item);
    
}
coding.forEach(printMe)

const myCoding = [
    {
        languageName : "javaScript",
        languageFile : "js"
        
    },
    {
        languageName : "java",
        languageFile : "java"
    },
    {
     languageName : "cpp",
        languageFile : "cpp"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
    
    
})