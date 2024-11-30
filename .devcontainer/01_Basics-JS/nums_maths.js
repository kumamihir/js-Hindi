const score = 400
console.log(score)

const balance = new Number(200)
console.log(balance)

//if you want to change any number to string

console.log(balance.toString())

console.log(typeof balance)

// we use to fixed method when we are making any ecommerce website

const newnum = 430
console.log(newnum.toFixed(2))

const secnum = 23.9876
console.log(secnum.toPrecision(4))

// for big hundered value we can convert it into locale string having commas with ref of us standards

const hundered = 10000000

console.log(hundered.toLocaleString())

//if you want indian system

console.log(hundered.toLocaleString('en-IN'))



//+++++++++++++++++++++ MATHS ++++++++++++++++++++++++++


console.log(Math)
console.log(Math.abs(-5))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.round(4.3))


//imp thing used later in our website formation

// if you want any random number you cna use this method

console.log(Math.random())


//if you wnat a random no from 1 to 10 

console.log(Math.random()*10 + 1)
//we do +1 because in any of the one case there will be a random no 0.04 or any similar like this when we multiply it with 10 it will give 0 but we want no form 1 to 10


const min = 10
const max = 20

// if you want only integer from min value  you cna use this formulla;
console.log(Math.floor(Math.random()*(max-min+1)) + min)
