const course = {
    coursename : "js in hindi",
    price : "9",
    courseinstructor : "Practice",
}
// if you want to print courseinstuctor

console.log(course.courseinstructor)
//but we can do this one also and this being used by many good developer
// also this is called destructuring

//this is syntax

const {courseinstructor : cid} =course
//  console.log(courseinstructor)
 console.log(cid)

 //now this courseinstructor word id too big to type we can also give him a new name that is actualy called desturcturing

 