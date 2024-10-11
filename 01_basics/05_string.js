 const name = "shahid"
 const repoCount = 21
 console.log(`HEllo my name is ${name} and my repo count is ${repoCount}`);
 
 const gameName = new String('hiteshch')
 console.log(gameName[0]);
 console.log(gameName.length)
 console.log(gameName.__proto__);
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(4));
 console.log(gameName.indexOf('t'));
 console.log(gameName.substring(0,4)); 
 console.log(gameName.slice(-7,4));

 const newString = "       hitesh       "
 
 console.log(newString.trim());

 const url = "http://shahid-aftab%20web.com"

 console.log(url.replace('%20', '-'));

 
 console.log(url.includes('shahid'));


 const AnotherStr = "shahid-aftab-sa"
 console.log(AnotherStr.split("-"));