                                          //class
class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encrpytPassword(){                                // |
        return `${this.password}abc`                    //|   methord
    }                                                  //|

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const vermaji= new user("sahil","verma@gmail.com","1123")

console.log(vermaji.encrpytPassword());

console.log(vermaji.changeUserName());




                                       //by prototype
                                  //bhind the scene
function users(userN,em,pass){
    this.userN=userN
    this.em=em
    this.pass=pass
    // this.encrpt= function(){
    //         return `${this.pass}abc`
    //     }

}
users.prototype.encrpt= function(){
    return `${this.pass}abc`
}

const verma= new users("sahil","verma@gmail.com","1123")
console.log(verma.encrpt());


