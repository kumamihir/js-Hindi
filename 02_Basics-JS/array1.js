// array

const myarr =[0,1,2,3,4]

console.log(myarr)
console.log(myarr[3])


const myheroes = ["ninja-hattori","motu-patlu","doraemon"]

console.log(myheroes)



//arrays method


myarr.push(6)


myarr.pop() //pop does not need any no or arg it just remove the last element form the array


myarr.unshift(5) // unshift takes any number and paste it in the first index of the array or the 0 index of an array

myarr.shift() // it just remove the first element or 0 indexed element;


// in js there are some method in which we can ask question and we get answer in just boolean form

console.log(myarr.includes(4))
console.log(myarr.includes(8))

// we can also check for indexof

console.log(myarr.indexOf(9))



const newarr = myarr.join()
console.log(newarr)
console.log(typeof newarr)

console.log(myarr)


// splice and slice method;

console.log("A ",myarr)

const n1arr = myarr.slice(1,3)
console.log(n1arr)

const n2arr = myarr.splice(1,3)
console.log(n2arr)
//when you use splice you get the result including the range of the arguments but this is not totally correct wheter you cna also check by printing your array afteerusing splice method

console.log( " c ",myarr)

// as you can see after using splice the arg part is spliced out from that array and the remaining part is further printed





