class user {
    constructor(username){
      this.username=username
    }

    logme(){
        console.log(`username :${this.username }`);
        
    }
    static createId(){
        return `123`
    }
}

const sahil= new user("sahil")
// console.log(sahil.createId()); //done  if create id is static no output


class teacher extends user{
    constructor(username,email){
      super(username)
        this.email=email
    }
    check(){
        console.log(`hello this is ${this.username} ans my email is ${this.email}`);
        
    }

}

const verma = new teacher("shail","verma@gmail.com")
verma.check()