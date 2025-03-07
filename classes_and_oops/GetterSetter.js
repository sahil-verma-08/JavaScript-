 class user {
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return     `${this._password}ABC`
    }
    set password(value){
        this._password=value
    }
 }

 const sahil =new user("sahil@gmaiol.com","abc")
 console.log(sahil.email)
 console.log(sahil.password)