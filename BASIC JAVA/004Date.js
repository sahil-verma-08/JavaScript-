//Dates

// let mydate=new Date()
// console.log(mydate)                          // mix output
// console.log(mydate.toString())               // date time with standard
// console.log(mydate.toDateString())        // on;y day and date
// console.log(mydate.toLocaleString())  //date and time
// console.log(mydate.toLocaleDateString()) // date
// console.log(typeof mydate)                //type

// representation of date input

// let mycreateDate = new Date(2023,0,23)

// let mycreateDate = new Date("2023-01-09")
// console.log(mycreateDate.toDateString())
// console.log(mycreateDate.toLocaleDateString()) 

// let my_Timestamp=Date.now()
// // console.log(my_Timestamp) // in miliseconds
// // console.log(mycreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(newDate.getHours());


newDate.toLocaleString('default',{
    weekday:"long",
    
})

 