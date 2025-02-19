// // .....................................(1)
//  function sayame(){
//     console.log("sahil")
//  }

//  sayame()
//   //....................................(2)
//  function addTwoNumber(num1,num2){
//     console.log(num1+num2)
//  }

//  const result= addTwoNumber(3,4)
//  console.log(result)

//   //....................................(3)

// function addTwoNumber(num1,num2){
//       //    ....(1)

// //    let a=num1+num2
// //    return a

// //        (2)
// return num1+num2
//  }
// const result= addTwoNumber(3,4)
//  console.log("result",result)


// // ...........................................(4)

// function loginUser(usernmae){
//     // if(usernmae===undefined)
//     if(!usernmae){
//          return 'plz enter the name'
        
//     }
//     return `${usernmae} just logged in`
// }

// console.log(loginUser("sahil"))
// console.log(loginUser())

// //.....................................................(5)
                                //    //  (rest opretor)
// function calculate(...num1){   
//     return num1
// }
// console.log(calculate(1,2,3,4,5))

// // ................................also write as

// function calculate(val1 ,val2,...num1){
//     return num1
// }
// console.log(calculate(1,2,3,4))  // vlaue 1 and 2 are val1 ,val2 remail in num1 array



//.............................. passing object in function
// const user={
//      username: "sahil",
//      code:143
// };
// function handleobj(anyobj){
//     console.log(`usernmae is ${anyobj.username} nad code ${anyobj.code}`)
// }
// handleobj(user)


// ..................................passing array in funtion

const myarray=[12,115,13,14]

function returnsecondvalue(getarray){
    return getarray[1]
}
console.log(returnsecondvalue(myarray))