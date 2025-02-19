const heros=["thor","ironman","sahil","shagun"]
const heros2=["krish","spiderman" ,"papa","boxer"] 

// ********PUSH***************************

// heros.push(heros2)

// console.log(heros)     // arry in arry
// console.log(heros[3][1])
// console.log(heros[3])

// .......................................................................combine the arry

//******************CONCAT.. */

newHeros=heros.concat(heros2)  
console.log(newHeros)

//*****************SPREAD */

const newAarry=[...heros,...heros2]
console.log(newAarry)

// // ....................................................................array in arry to single array

// const example=[1,2,3,4,5,[6,7,8],[4,5,6[1,2,3,4]]] 
// const conexample=example.flat(Infinity)
// console.log(conexample)

// //............................................................................consvert to array

// console.log(Array.isArray("sahil"))  //check is array or not
// console.log(Array.from("sahil")) // convert tp array

// console.log(Array.from({name:"sahil"}))


// let s1=100
// let s2=100

// let s3=100
// let s4=100

// console.log(Array.of(s1,s2,s3,s4))
