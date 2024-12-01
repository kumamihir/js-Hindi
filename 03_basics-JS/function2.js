//use of "rest operators";

function calculatecartprice(num1){
    return num1
}

console.log(calculatecartprice(200,400,500))

//when you run this code this give the output of 200 not very single element will come in the output

//if you want to get all that element in the form of array so that yoou ca use loops on those in future

//use rest operator // you have to use this "...num1" 

function calculatecartpricenew(...num1){
    return num1
}


console.log(calculatecartpricenew(2000,4000,5000,6000))

//but in the parameter thing if you give this

function calculatecartpricenew1(val1,val2,...num){
    return num
}
console.log(calculatecartpricenew1(200,300,400,500,600)) // in thia 200 goes to val1 ,300 goes to val2 and rest all goes to the array



//**************   handling of objects in function   ****************


const user = {
    name : "MIHIR",
    age :19
}

function handleobj(anyobject){
    //in upper parameter you can take any thing i take anyobejct if you want you can take alibaba whatever you want

    //you just have to take access of what yoh have taken

    console.log(`hi my name is ${anyobject.name} anad my age is ${anyobject.age}`)

}

//but when you call that func you have to give the real const obect which you declare first in the arguments

handleobj(user)