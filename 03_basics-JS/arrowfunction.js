//to learn arrow function you first have to do objects


const user = {
    username : "Mihir",
    price : 99,


    welcomemessage : function(){
        console.log(`hi ${this.username},Welcome to this website`) //in this "{}" we use "this.useername" this is used for give the current context in simple ways if in future thia username is being changed from mihir to any other the "this" function automatically chaneg this function 

        //what if we print just "this";

        console.log(this)

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