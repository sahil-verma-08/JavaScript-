function setUsername(username){
    this.username=username
    console.log("called")

}
function createUser(username,email,password){
    // setUsername(username)  // its does not hold  reference
    setUsername.call(this,username)  // for hold the values
    
    this.email=email 
    this.password=password
}    
const verma= new createUser("sahil","sahil@gmail.com","1234")
console.log(verma)