



//in this "{}" this is called scope like if it comes with function this is called function scope 

//for a time instant if we take a if condition bcoz in if condition there also a scope

if (true) {
    let a=10;
const b= 20
var c = 30;
  
}
// console.log(a)

//when you try to print out this it shows "ReferenceError: a is not defined" so for some time we comment out the a part


// console.log(b)



//same as a it shows "ReferenceError: b is not defined"
//so for some time we comment out b part also

console.log(c)
    //now for c part this give the output 30
    //thats the main reason why one cannot use var method to declare things it goes out from scope and make the confusion between progreammers



    //************ global and block scope ************//

    let m = 300
    if (true) {
        let m=20
        console.log("BLOCK SCOPE",m)
        
    }

    console.log("Global Scope",m)