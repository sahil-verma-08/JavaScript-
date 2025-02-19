const form =document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height=parseInt(document.querySelector("#height").value )
    const weight=parseInt(document.querySelector("#weight").value )
    const results=document.querySelector("#results") 
    const message=document.querySelector('#message')
    if (height==='' || height<0 || isNaN(height)){
         results.innerHTML= "please gove a valid height value"
    }
    else if (weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML= "please gove a valid weight value"
   }
   else {
     const bmi= (weight/((height*height)/10000)).toFixed(2)
     results.innerHTML = `<span>${bmi}</span>`
     if (bmi<=18.6){
          message.innerHTML="under weight plz do exercise"
     }
      else if (bmi>=24.6){
          if (bmi<=18.6){
          message.innerHTML="under weight plz do exercise"
     }
     }
     else{
     message.innerHTML="Normal weight  GOOD ,maintain you self  ee"
     }
   }
});
