//for loop

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element)
    
// }

for (let i = 0; i <=10; i++) {
    // console.log(  `outer loop value : ${i}`)

   for (let j = 0; j <=10; j++) {
    console.log(`inner loop value : ${j} & outer loop value ${i}`)
    
   }
    
}


//loop on array

const myarray = ["flash","shaktiman","spiderman"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element)

    
}