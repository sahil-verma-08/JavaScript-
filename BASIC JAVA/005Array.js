 Array   
// const arr=[1,2,4,5]
// console.log(arr[0])

const arry2= new Array(1,2,3,4)
console.log(arry2)

//methods


// (1)

arry2.push(6)
arry2.push(7)
console.log(arry2)
// (2)

arry2.pop()
console.log(arry2)

//(3)

arry2.unshift(9)

// (4)
arry2.shift()

console.log(arry2)

console.log(arry2.includes(9)); // for check present or not
console.log(arry2.indexOf(3)); // for index

const newarry =arry2.join()
console.log( typeof newarry); // for join array in string

slice, splice

 console.log("A" ,arry2)
const myarr1=arry2.slice(1,3)// for get value from array
console.log( myarr1)
const myarry2=arry2.splice(1,2) // for delete value from array
 console.log( arry2)
 console.log(myarry2) 