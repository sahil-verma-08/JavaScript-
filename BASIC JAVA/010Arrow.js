                                                                        //  THIS 
// const user={
//     username:"sahil",
//     code:143,
//     welcom:function(){
//         console.log(`${this.username},welcom`);
//         console.log(this)
//     }
   
// }
// user.welcom()
// user.username="verma"
// user.welcom()
// console.log(this)
// ***************************************************8

// function exam(){
//     // let username="sahil"                 // **it's undifined becouse its work with object only 
//     // console.log(this.username)
//     console.log(this) // it's show all value function of this
// }
// exam()

 
                                                                                                //   Arrow function ...
// // ..............................................................................(1)
// const newfun = ()=>{
//     // console.log("hello")
//     console.log(this)

// }
// newfun()
                                                                            //  (2)
// const add=(num1,num2,num3)=>{
//     return num1+num2+num3
// }
// console.log(add(2,"3",5))

                                                                            //   (3)(implicit return)

// // const x=()=>"hello"
// const x=()=>("hello")           // when { }use so, return kry word write  ,() is use so, not use return keyword
// console.log(x())
                                                                                            // **IIFE
                                                                      // (1)
((name)=>{
    console.log(`${name} helo`)
})
("sahil");
                                                                    //    (2)
(function z(){
    console.log("hello")
})
();




