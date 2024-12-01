function saymyname (){
    console.log("M")
    console.log("i");
    console.log("h");
    console.log("i");
    console.log("r");
    console.log("k");
}

// if you want to run funcn you have to do this

saymyname () //here paranthesis are executions

function addtwo(N1,N2){

   

    console.log(N1+N2);


}

addtwo(Math.random()*10, Math.random()*10);

//in the process of declaratoin of function you put dowwn the values called parameters in upper case it was N1,N2

//and when you about to run the function and give the value at which you have to run that function ae called arguments;

function loginusermessage(username){
    return `${username} just logged in`

}
console.log(loginusermessage("MIHIR"))

//other than mihir if you give an empty string what is the output //it is just logged in

console.log(loginusermessage(""))//just logged in

console.log(loginusermessage()) //but if you dont give any thing the output is undefined just logged in