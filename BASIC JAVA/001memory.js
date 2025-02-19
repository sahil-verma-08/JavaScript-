// memory:

//  1. stack(primitive)
//  2. heap(non primitive)


//examole of stack  (using copy)
let my_youtub= "sahil"
let another_name=my_youtub
another_name="verma"
console.log(my_youtub)
console.log(another_name)


//exmaple of heap(using refrence)
  
let user1={
    email:"sahil@gamil.com",
    upi:"1343563"
}

let user2=user1
console.log(user2)
user2.email="verma@6767.com"
console.log(user1.email)
console.log(user2.email)