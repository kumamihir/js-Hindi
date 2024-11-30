const name = "Mihir"
const repocount = 9
// console.log( name + repocount + " value");

const newone = "mihir-sameer-mayank"


//  in modern javascript we cant use this add(+) symbol for concatenation of two or more string we can use this method also


//  THIS method is known as string interpollation
console.log( `my name is ${name} and my repocount is ${repocount}`)


//  we can also declare string as;

const gamename = new String('MIHIR')

console.log(gamename)

// we can use string prototype function method like to upper case 

// console.log(gamename.toUpperCase())
console.log(gamename.toLowerCase());

// console.log(gamename.charAt(3))
// console.log(gamename.indexOf('i'))
console.log(gamename.substring(0,4))

console.log(gamename.slice(-5,2))

//when we are creating our website and any user gives spaces in email and we dont want to save spaces in our databases so we use the sstrring method called trim


const newstring = "    MIHIR reads in first class   ";
console.log(newstring)
// trim method delete all the spaces( not all the spaces but the corner unwanted spaces or we can say trim remove all the starting and ending spaces)
console.log(newstring.trim())


const url = "https://mihirkuy.com/mihir%20kumar"

//sometime browser dont understand the whitesapces so it changes our whute spaces into %20 like things if wwe wwant to change thiw we can use string method called replace

console.log(url)

console.log(url.replace('%20','-'))


//now we can change string into an array by the method of split in this we have to give the seprator like at what behaves we have to make them array;

console.log(newone)
console.log(newone.split('-'))