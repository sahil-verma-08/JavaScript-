function user(email,password){
    this._email=email
    this._password=password

    Object.defineProperty(this,"email",{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email=value
        }

    })
    
    Object.defineProperty(this,"password",{
        get: function(){
            return `${this._password}Abxd`
        },
        set: function(value){
            this._password=value
        }

    })


}
const sahil= new user("sahil@gmail.com","1234")
console.log(sahil.email)
console.log(sahil.password);
