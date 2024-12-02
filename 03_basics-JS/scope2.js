//in this we learn about nested scopes like functions ke andar functions vala scope

function myname(){
    const username = "mihir"
    function myage(){
        const age = 19
        //this is scope ke andar scope "nested scope"
        console.log(username) //this can be accesable bcoz we are currently in "myname function scope"

    }

    // console.log(age)//this cant be accesible bcoz you are currently outside the myage scope

    //but when you comment yiu console.log(age) you observe that code is running smoothly
    myage();
}
myname()