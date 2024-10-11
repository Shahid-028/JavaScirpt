const marvel_heros = ["iron-Man","Scarlett witch","black Widow"]
const dc_heros = ["Bat-man","Penguin","Super-Man"]
//not preffered
//marvel_heros.push(dc_heros)
//console.log(marvel_heros);  
//mostly preferred

//marvel_heros.concat(dc_heros)
//console.log(marvel_heros);

// to spread the array

const all_heros = [...marvel_heros,...dc_heros]
console.log(all_heros);


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

new_array=another_array.flat(Infinity)
console.log(new_array);

// use of Array.isArray,Array.from,Array.of

console.log(Array.isArray("shahid"));

console.log(Array.from("shahid"));

console.log(Array.from({name: "shahid"}));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));