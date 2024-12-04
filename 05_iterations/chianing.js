//chaining process

// const mynum = [1,2,3,4,5,6,7,8,9]
// const newnum = mynum.map((nums) => nums = nums +1)
// console.log(newnum)

//chaining

const newno = [1,2,3,4,5,6,7,8,9]
const newnew = newno.map( (num) => num*10 ).map( (nums) => nums + 1 ).filter((nums) => nums>60)

console.log(newnew)
