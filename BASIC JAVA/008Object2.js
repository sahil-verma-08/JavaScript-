// // // .....................................declaration of object:
// // ............(1)singleton object
// const  user= new Object()
// user.name="sahil"
// user.age=20
// user.isLogedIN=false

// console.log(user)

// // //   Nested object

// const x={
//     name:"sahil",
//     age:{
//         year:{
//             birth:1999
//         }
//     }
// }
// console.log(x.age.year.birth)


// // // Combine Objects

// const obj1={1:"a"}
// const obj2={2:"b"}

// // const obj3={obj1,obj2}
// // console.log(obj3)
// //.............................by using assign
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)
// //...........................by using spread
// const obj4={...obj1,...obj2}
// console.log(obj4)


// // // ................................................ARRAY OF OBJECT

// const arr=[
//     {name:"sahil",age:20},
//     {hero:"amitaab"}
// ]

// console.log(arr[0].age)

// // for acces key,value, entrties


const  ex= new Object()
ex.name="sahil"
ex.age=20
ex.isLogedIN=false

// console.log(Object.keys(ex))
// console.log(Object.values(ex))
// console.log(Object.entries(ex))

//...............................for chaecking property present or not

console.log(ex.hasOwnProperty("name"))

//..................... destracturing

 const {isLogedIN : hai_ya}=ex
console.log(hai_ya) 