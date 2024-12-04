//for of

const array = [1,2,3,4]
for (const nums of array) {
  //  console.log(nums)
    
}
//this loop does not need any incrementation/decreementation conditions or other conditions


/******************    MAP   *******************/

//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.


const map = new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('Fr',"France")

// console.log(map)

//iteraton on maps

for (const [keys,value] of map) {
    console.log(keys, '-:' ,value)
    
}

//this "[keys,value]" is a destructure for maps to array like

//for of loop does not run on object