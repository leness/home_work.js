class User {
    constructor(name = "name", email = "email", phone = "phone", password = "password") {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }
    toShownName() {
        return this.name;
        // console.log(this.name);
    }
} 
const myUser = new User(undefined, "dd@gmail.com", undefined, "kkk")
 console.log(myUser)
class SuperUser extends User {
    constructor(name = "superName",nickName = "nickName", confirm = "confirm") {
        super(name)
        this.nickName = nickName;
        this.confirm = confirm;
    }
    toGetPhone() {
        return this.phone
    }
}

const mySuperUser = new SuperUser("goodFather", 'NickNames', true)
console.log(mySuperUser)

console.log(mySuperUser.toShownName())

class NewSu extends SuperUser {
    constructor(name, skills) {
        super(name)
        this.skills = skills
    }
}
const myNewSu = new NewSu("Vanja", ['html', 'css'])
console.log(myNewSu)
console.log(myNewSu.toShownName())