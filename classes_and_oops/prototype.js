let myName ="sahil    "
console.log(myName.truelength);


let myhero=["thor","spiderman"]
let heropower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderpower: function(){

        console.log(`spidy poer is ${this.spiderman}`)
    }
}
Object.prototype.sahil=function(){
    console.log(`sahil is present in all subject`);
    
}
// myhero.sahil()
// heropower.getSpiderpower()

Array.prototype.heysahil=function(){
    console.log(`hello ji`)
}
myhero.heysahil()

                                      // Inheritance

const user={
    name:"chai",
    email:"sahil@gmail.com"
}
const teacher={
    makeVideo:true
}
const teacherSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:"js assig",
    fulltime:true,
    __proto__:teacherSupport
}

teacher.__proto__=user

//modern syntax

Object.setPrototypeOf(teacherSupport,teacher)

let anotherUsername="chai   "

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`true lenght is : ${this.trim().length}`);
    
}
anotherUsername.truelength()
myName.truelength()