// const coding = ["javascript","python","ruby","rust","cpp"]

// coding.forEach((items) => {
//     console.log(items)

// })


const nums = [1,2,3,4,5,6,7,8,9,10]

//just like foreach function we have filter function who also takes call back function or arrow function

// const  newnums = nums.filter((items)=>items>4)
const newnums = nums.filter( (items) =>{
     return  items>4
}) //in this arrow function you see we cant give a " {}"
//thing so if you give this thing you have to write a "return " before it 
console.log(newnums)
