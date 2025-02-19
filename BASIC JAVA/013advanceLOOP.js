                                                                        //    (1)" FOR OF " LOOP
const arr = [1,2,3,4,5]
for(const i of arr){
    // console.log(i)
}
//                     MAP

const MYmap = new Map()
MYmap.set("in","india")
// console.log(MYmap)
                                    //  looping on map 
for (const [key,value] of MYmap){
    // console.log(key,":-",value)
}

           //NOTE:  for of loop is not working on objects


                                                                    //   (2) "FOR IN" looping
                    
const arr2=[1,2,3,4,5]
 for (const i in arr){
    // console.log(i)                          // it's give only key (index)
    // console.log(arr2[i])                       // it's give the values
 }

 // for in loop  for object

 const myobj={
    name:"sahil",
    code:143
 }
 for (const i in myobj){
    // console.log(i)  // for keys
    // console.log(myobj[i])  // for values 
    // console.log(i,":-",myobj[i])         //for key:-value 
 }



                                                                                      // FOR EACH LOOPING
    
const x=[1,2,3,4,5,6]
x.forEach((item,index,x)=>{
    // console.log(item,index,x)
})

                                             // for using object in array

let array1=[
    {name:"sahil",age:20},
    {name:"vinod", age:30}
]

array1.forEach((item)=>{
    // console.log(item.name,item.age)
}
)

                                    //Note :  for each does not give any return value
                                    let m=  x.forEach(()=>{
                                        // console.log("hello")
                                    }
                                    ) 
                                    // console.log(m)  // it's give undefind
                        
                                    // for return bt for each uss logic
                         
                                    let store= []
                                    x.forEach((i)=>
                                    {
                                        if(i<3){
                                            store.push(i)
                                        }
                                    })
                                    console.log(store);
    
    
                                    //    So, for simplyfy it use  "FILTER"