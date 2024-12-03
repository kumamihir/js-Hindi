const useremail = "someone@gmail.com"

if(useremail){
    console.log("Got the user email")
}
else{
    console.log("didn't get the user email")  
}

//in this we cant compare anything just give "username" and if takes it to true and give the "got user email"

//if we take "empty string " in useremail it give ouput opposite now this time this statement take empty string as a false value and give the else output

//if we take "empty array " in useremail it give ouput opposite now this time this statement take empty array as a true value and give the if statement output




 
//******   falsey vlaues   *****//
/*


1.false 
2. 0
3. -0 // yes neg values are falsyvalue
4. BIGINT mein 1 0n likha jata hai usse bhi falsy mana jata hai
5.null and undefined
6.Nan
7."" empty string


*/

//except these, all are truthy values

/*

truthy value

"0"
'false'
" " //space between string is a truthy value
[]
{}
function (){}


*/