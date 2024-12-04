const myobject = {
    js : 'javascript',
    cpp : 'c++',
    sw :'swift',
    rb : 'ruby'
}

//for in loop

for (const key in myobject) {
//   console.log(key)  //isse sirf abhi keys ayengi values nhi ayi hai 
  //for both kyw value pairs you can use
  console.log(`value of keys  and their respective value is ${key}  -: ${myobject[key]}`)
}