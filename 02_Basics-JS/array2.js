const marvel_heroes = ["spiderman","thor","ironman"]
const dc_heroes = ["shaktiman","wolveriene","deadpool"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes)
console.log(marvel_heroes[3][2])

//you can also use concat func;

marvel_heroes.concat(dc_heroes)

console.log(marvel_heroes)
// same as push func


//this concat method combine two arrays and return  a new array wihtout modifying the existing array

//but if you make a new var like all heroes and use the same concate method you cna get a blowing thing

const all_heroes = marvel_heroes.concat(dc_heroes)



console.log(all_heroes)

//after doing this you can get a array without getting any array in array like in push mehtod you are getting before;


//you can also use "spread " method for doing the same thing

const new_heroes = [...marvel_heroes,...dc_heroes]

console.log(new_heroes)

const new_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_new_array = new_array.flat(Infinity)
console.log(real_new_array);


//in array there are some method like isarray and from things to converst and ask wether thee thing is array or not and if not then you can convert it


const myarr = Array.isArray("MIHIR") // as we know this is not an array so consoling it should be a false answer

console.log(myarr)
console.log(typeof myarr) //boolean type because this only gives wheteher an element is array or not i.e true or false;
//but if you want to convert it in array

console.log(Array.from("MIHIR"))


//if you want to convert a score board in an array you can ,

//you can also use "of " insted of "from" method

let score1=100
let score2=200
let score3 = 300
let scpre4=400

console.log(Array.of(score1,score2,score3,scpre4))