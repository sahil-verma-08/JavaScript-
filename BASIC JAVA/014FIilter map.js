                                                                            //   FILTER
const x=[1,2,3,4]
let c= x.filter((item)=>{                           // filter is use for condition
    return item%2==0
})
// console.log(c)


                                                                                                // MAP 

let z=x.map((item)=>item*10)                      // map aplly on all element 
// console.log(z)            //[ false, true, false, true ]

// NOTE: if we apply condition on map its give true false output

let y=x.map((item)=>item%2==0)
// console.log(y)                    //[ false, true, false, true ]

                                                //   nested map anf filter 

let s= x.map(
    (item)=>item*10
             )
    .map(
        (item)=> item +2)
        .filter(
            (item)=> item>20)

// console.log(s)

                                                    // REDUCE
let i=0
let cart=x.reduce((acc,curval)=>acc+curval,i)
console.log(cart)

//using function
let cart2=x.reduce(function(acc,currval){
    return acc+currval
},i)
console.log(cart2)

