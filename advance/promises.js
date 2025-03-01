//                                                             //creat promises

//  const promiseOne= new Promise(function(resolve,reject){
//     // do an async task
//     // DB calls , cryptography ,network
//   setTimeout(function(){
//             //  console.log('async task is compelete');
//              resolve()
//   },1000)

//   })
//                                                              //prmise comsumed
// promiseOne.then(function(){
//     // console.log("promise consumed")
// })

//                                                           //creat and consumed  (in short)
//  new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // console.log("async task 2")
//         resolve()
//     },1000);
//  }).then(()=>{
//     // console.log("taks complete")
//  })                   

                                                               //create and consumed (take data from resolve)
//  const promiseThree = new Promise((resolve,reject)=>{
//             setTimeout(function(){
//                  resolve({"username":"sahil","email":'sahil@gamail.com'})
//             },1000)
//  });
//  promiseThree.then(function(user){
//     // console.log(user)
//  })


                                                                 //create and consumed (error) 

// const promiseFour=new Promise((resolve,reject)=>
// {
//    setTimeout(function(){
//     let error =true
//     if(!error){
//         resolve({"username":"sahil","email":"s@gmail.com"})
//     }
//     else{
//         // console.log('error')
//         reject()
//         }
//    })
// })

// promiseFour.then((user)=>{
//     // console.log(user)

// }).catch((e)=>{
//     // console.log("eror")
// })                                               
//                                                                   //create and consumed (chaainig)   
//  const promiseFive=new Promise((resolve,reject)=>
//     {
//        setTimeout(function(){
//         let error =false
//         if(!error){
//             resolve({"username":"sahil","email":"s@gmail.com"})
//         }
//         else{
//             console.log('error')
//             reject()
//             }
//        })
//     })
    
//     promiseFive
//     .then((user)=>{
//         // console.log(user)                         //give complete resolve value
//         return user.username
    
//     })
//     .then((username)=>{
//         // console.log(username)                         // take a return value of above then
//     })
//     .catch((e)=>{
//         // console.log("eror")
//     })
//     .finally(()=>
//         console.log('the promise is either resolve or reject')
// )                                                                                       //allways exicute



                                                     //promise using async await
                                                     
                                                     

//  const promiseSix= new Promise((resolve,reject)=>{
 
//     setInterval(function(){
//         let error=true
//     if (!error){
//         resolve({"username":"sahil","email":"papa@gmail.com"})
//     }
//     else{
//         reject('error: js went wrong')
//     }
//  },1000)
//  })                                                    

//  async function consumePromise() {
//     try{
//         const response=await promiseSix
//         console.log(promiseSix)
//     }
//     catch(error){
//       console.log(error)
//     }
    
//  }

//  consumePromise()


                                                             //fecth()
                                                        //  (By async await)
// async function getdata() {
//     try{
//          const response= await fetch('https://api.github.com/users/sahil-verma-08')
//          const data = await response.json()
//          console.log(data);
// } catch(error){
//     console.log("E:",error)
// }
    
// }
// getdata()

                                                            //then and catch
fetch('https://api.github.com/users/sahil-verma-08')
.then((resolve)=>{
    return resolve.json()
}).then((data)=>{
    console.log(data)
})
.catch((reject)=>{
    console.log("error come")
})
                                                            