//to learn arrow function you first have to do objects


const user = {
    username : "Mihir",
    price : 99,


    welcomemessage : function(){
        console.log(`hi ${this.username},Welcome to this website`) //in this "{}" we use "this.useername" this is used for give the current context in simple ways if in future thia username is being changed from mihir to any other the "this" function automatically chaneg this function 

        //what if we print just "this";

        // console.log(this)

        //this is the out put

        //hi Mihir,Welcome to this website
// {
//     username: 'Mihir',
//     price: 99,
//     welcomemessage: [Function: welcomemessage]
//   }
//   hi sameer,Welcome to this website
//   {
//     username: 'sameer',
//     price: 99,
//     welcomemessage: [Function: welcomemessage]
//   }
   }
    

}
user.welcomemessage()

//if this time user name changed to sameer
user.username = "sameer"
user.welcomemessage()


//if you do 

function chai(){
     let usernames = "mihir"
    console.log(this.usernames) //this is not working bcoz this only works under objects
    //in upper one functions arein objects

    // if you use let before writing usernames it gives output of "undefined"
    //but if you dont give the let variable it give output normally "mihir";
}
chai ()



//**********************   ARROW FUNCTION   **********************//


//this is an arrowfunction

const arrowfun = () => {
    let arc = "degree1"
    console.log(arc) // output  is " degree 1"
    console.log(this.arc) //output is "undefined"
    console.log(this) //output is " {} ";empty object

}
arrowfun()


const addtwo= (num1,num2) =>{
    return num1 + num2
}
console.log(addtwo(3,5))

//this above function can also be written as "impicit return "

const addtwonew = (num1,num2) => num1 + num2 //the way of writting impicit return

//for a good practice we always put up the paranthesis on the impicit return
const addtwonewnew = (n1,n2) => ({username : "Mihir"}) //by giving paranthesis you cna easily return an object also 

console.log(addtwonew(2,2))
console.log(addtwonewnew())