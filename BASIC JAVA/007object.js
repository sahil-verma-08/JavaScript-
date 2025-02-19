const mysym=Symbol("")
const user={
    name:"sahil",
    age:22,
    class:"3rd year",
    email:"sahilverma.@gmail.com",
    [mysym]:"key1"                      //type -----symbole

}
// method to acess the object

console.log(user.name);
console.log(user["email"])
console.log( user[mysym])

// for freezing(no chnge after freezing)
Object.freeze()
user.email="verma2431@gmail.com"
console.log(user)
console.log(user["email"]) // there is no change


// functions in object

user.greeting=function(){
    console.log(`hello ${this.name} ji you email is ${this.email}`)
}
user.greeting()
