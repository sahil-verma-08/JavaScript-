
//              is this possible to change the value of math.pi?
//     //    ans --  NO 
    // becouse :
const discreptr= Object.getOwnPropertyDescriptor(Math,'PI')
console.log(discreptr)



//   {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

    //    let makes unchangeable  object 

const sahil={
    name:"sahil",
    email:"verma@gmail.com"
   }
// const check= Object.getOwnPropertyDescriptor(sahil,"name")
// console.log(check);

Object.defineProperty(sahil,"name",{
    writable: false,         // can not change
  enumerable: false,          // loop does't work
  configurable: false        
})
const check= Object.getOwnPropertyDescriptor(sahil,"name")
console.log(check);

                               
sahil.name= "hello"  // no change by change property]

console.log(sahil.name)   





