                //   Object lIteral

// const obj={
//     username:"sahil",
//     email:"sahil@gmail.com",
//     getvalue:function(){
//         console.log(this.username)

//     }

// }

// console.log(obj.username);
// obj.getvalue()




                                        //constructor function
                                // example
// const promise01= new Promise()
// const date = new Date()


function user(username,logedIN,logedOut){
    this.username=username;
    this.logedIN=logedIN;
    this.logedOut=logedOut,
    this.getvalues= function(){
        console.log(`welcome ${this.username}`)
    }
    return this                  // u can right or not as your wish
}

// const user01=user("sahil",12,true)
// const user02=user("verma",11,false)  // this over right the value  yhat why we use "new " key word
// console.log(user01)

const user01= new user("sahil",12,true)
const user02= new user("verma",11,false)
console.log(user01)
console.log(user01.constructor)     // knowledge about the value 
console.log(user02)


