// obejct can be defined as literals and constructor 

// singleton can be obtained form constructor 


//object literals


const mysym = Symbol("key1")

const jsuser = {
    name : "MIHIR",
    "full name" : "mihir kumar",
    // mysym : "mykey1", // but thie is not a correct way to do in this the thing is been printed but when you print its type of its not be  a symbol datatyoe but a string datatype

    // if you want to use symbol or waant to get a symbol datatypee the rela syntax is to used it in a "[]" this way;

    [mysym] : "jalwakey1", // this is a correct way to do this
    age : 19,
    gmail : "someone@gmail.com",
    isLoggedIn:true,
}

console.log(jsuser.gmail)
console.log(jsuser["gmail"])

//now id you console the name 

console.log(jsuser.name) // you get outupe name i.e mihir

//but is ou update the object part by full name in a string you cant access it by ".fullname"

console.log(jsuser["full name"]) //you have to take it as a string value

console.log(jsuser[mysym]) // and if you want to access this you have to put the sqr brackets to access it ;

//if you want to overwrite the obejct things

jsuser.gmail = "area@gmail.com"
console.log(jsuser.gmail)

//if you want to freeze the object so no one can change the object things

Object.freeze(jsuser)




