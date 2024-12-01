//singleton object declaration

// const jsuser = new Object();

const jsuser = {
    id : "123abc",
    name : "mIHir",
    isloggedIn : true,
    email : "some@gmail.com"

}

// if you print this you will get only empty object

console.log(jsuser)

//merging of two objects

const obj1 ={1: "hello ", 2 : "hey"}
const obj2 ={3 : "here",4 : "baua"}

//so for merging you can use the assign properties

const obj3 = Object.assign({},obj1,obj2) // if you only give this two param this is ok but for surity we give a paranthesis more

// in upper () this "{}" this works as a target and obj1,obj2 are working as sources and sources can be more than 2 .

// const obj3 = {obj1,obj2}
console.log(obj3)//  // if you do this ,this show the same probelem as array into an array like so this is not the correct thing to do so.

// beyond this we can also use "spread" operator

const obj4= {...obj1,...obj2}
console.log(obj4);


console.log(Object.keys(jsuser)) // this will gove us the array format output now you can do loop 

//just like keys we can also find resp values

console.log(Object.values(jsuser))