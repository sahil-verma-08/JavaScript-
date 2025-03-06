class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`user is ${this,this.username}`)
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    check(){
        console.log(`yes i am ${this.username}`);
        
    }
}

const sahil= new teacher("chai","sahil @gmail","123")
sahil.check()
sahil.logMe()
console.log(teacher instanceof user);
console.log(sahil instanceof user);
console.log(sahil instanceof teacher);
