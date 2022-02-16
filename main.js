class User {
    constructor(name, lastName, mail, password, age){
        this.name = name;
        this.lastName = lastName;
        this.mail = mail;
        this.password = password;
        this.age = age;
        this.changePassword = (pass) =>{
            if(pass != ""){
                this.password = pass;
                console.log("contraseña cambiada con exito");
            }else{
                console.log("No ingresaste ningun dato");
            }
        }
        this.addAge = () => {
            this.age += 1
            console.log(`La edad se a modificado ahora es: ${this.age}`)
        }
        this.reduceAge = () => {
            this.age -= 1
            console.log(`La edad se a modificado ahora es: ${this.age}`)
        }
    }
}

const userOne = new User("Juan", "Filadelfia", "example@example.com", "1234asd", 10)

console.log(userOne)

userOne.changePassword("elPepe")
userOne.changePassword("")
userOne.addAge()
userOne.reduceAge()