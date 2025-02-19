// const score=400 //it's type is number but it may or not
// console.log(score)
// console.log(score.toString().length)


// const balance= new Number(100) //it's definatly number
// console.log(balance) 
// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) 

// // toprecision

// const othernum=123.235
// console.log(othernum.toPrecision(3))

// const othernum2=23.235
// console.log(othernum2.toPrecision(3))

// const othernum3=1123.835
// console.log(othernum3.toPrecision(4))

// const othernum4=123.235
// console.log(othernum4.toPrecision(2))

// //to localeString

// const hun=100000000
// console.log(hun.toLocaleString('en-IN'))

// // +++++++++++++++++++ Math+++++++++++++++++++++++

// console.log(Math.abs(-4))
// console.log(Math.ceil(4.7))
// console.log(Math.floor(4.7))
// console.log(Math.pow(2,2))
// console.log(Math.min(4.8))

// // important

// console.log(Math.random()); //only btween (0,1)
// console.log(Math.random()*10); //for 0.01 it should be 0
// console.log((Math.random()*10)+1)
// console.log(Math.floor(Math.random()*10)+1)

const min=10
const max=20

console.log((Math.floor(Math.random()*(max-min))+1 )+min)
