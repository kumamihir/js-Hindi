//this is mainly here for counter neseted if-else



//syntax 


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 3
switch (month) {
    case 1:
        console.log("january")
        
        break;

        //for copy the same thing select first then do shift+alt+down-arrow
    case 2:
        console.log("february")
        
        break;
        //you can copy more

    default:
        console.log("march")
        break;
}

//this break stops the control flow if break doesnt exist so after match of the first case value the other cases statements automatically executed without tests of their respective cases except the default value one;