 const randomColor= function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for (let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
 }
 function changeBack(){
    document.body.style.backgroundColor=randomColor();

 }
 let intervelId;
const startchanging= function(){
 if(!intervelId){
    intervelId=setInterval(changeBack,1000)
 }
}

const stopchanging=function(){
    clearInterval(intervelId)
    intervelId=null;

}


document.getElementById('start').addEventListener('click',startchanging);
document.getElementById('stop').addEventListener('click',stopchanging);