// // in control flow we are talking about how to control programs by using conditions


//                                                                             //  (1)
//                                                                             // if
// let login=true  
// if(login){
//     console.log("hello")
// }
//                                                                             // if else
// let login2=true
// if (login2){
//     console.log("done")
// }
// else{
//     console.log("fail")
// }
//                                                                             // elseif

// let marks =30
// if(marks>30){
//     console.log("pass")

// }
// else if (marks<30){
//     console.log("fail")
// }
// else{
//     console.log("ok")
// }

//                                                                             // SWITCH
// let day= "mon";
// switch(day){
//     case "mon":
//         console.log("done")
//     case "tuesday":
//         console.log("not")
//     case "wed":
//         console.log("no")
// }

                                                       // for checking truly and falsy value
        // becouse "[]" arry are always true to how to find falsy

                                                                                    // truely values===   "0", "false", [], {},  function(){},   " "
                                                                                    //falsy values===  0,-0 ,NaN, null , undefined ,bigINT 0n
let arr=[]
// if (arr){
//     console.log("true")         // its give always true on empty array
// }

if (arr.length!==0){
    console.log("true")
}
else{
    console.log(" array is empty array")
}

                                
                        // becouse "[]" arry are always true to how to find falsy
let obj={}
if (Object.keys(obj).length!==0){
    console.log("true")
}
else{
    console.log("object is empty")
}

                                       //   for function
let fun= ()=>{
    console.log("fun")
}
if(fun){
    console.log("true")
}
else{
    console.log("false")
}


                                                     // NULLISH COALESCING OPERATER(??)
let num=5 ?? 10;
console.log(num) // 5

let num2= null ?? 30
console.log(num2) // 30

let num3= undefined ?? 30
console.log(num2) //30

