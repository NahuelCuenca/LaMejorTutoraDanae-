

class User {
    constructor(name, lastName, mail, password, age){
        this.name = name;
        this.lastName = lastName;
        this.mail = mail;
        this.password = password;
        this.age = age;
        this.listPet = [];
        this.listBooks = [];
        this.readBooks = [];
        this.changePassword = (pass) =>{
            if(pass != ""){
                this.password = pass;
                console.log("contraseña cambiada con exito");
            }else{
                console.log("No ingresaste ningun dato");
            }
        };
        this.addAge = () => {
            this.age += 1;
            console.log(`La edad se a modificado ahora es: ${this.age}`);
        };
        this.reduceAge = () => {
            this.age -= 1;
            console.log(`La edad se a modificado ahora es: ${this.age}`);
        };
        this.read = (books) => {
            let aux = this.listBooks.find(book => book.title === books);

            if(aux != undefined){

                this.readBooks.push(aux);
                console.log(`El libro ${books} se guardo con exito en los libros leidos`);
                console.log(this.readBooks);
            }else{

                console.log(`El libro ${books} no esta en tu libreria`);
            }
        };
        this.addBooks = (name, pag) => {
            this.listBooks.push({title: name, pages: pag});
            console.log(this.listBooks);
        };
        this.addPet = (name, agePet) => {
            this.listPet.push({name: name, age: agePet});
            console.log(this.listPet);
        };
        this.countPet = () => console.log(`${this.name} ${this.lastName} tiene ${this.listPet.length} mascota`)
    }
}
// {title: "", pages: 0}

const userOne = new User("Juan", "Filadelfia", "example@example.com", "1234asd", 10)

console.log(userOne)

userOne.changePassword("elPepe")
userOne.changePassword("")
userOne.addAge()
userOne.reduceAge()
userOne.addBooks("El pepe", 100)
userOne.read("El pepe")
userOne.read("El FEFEFE")

userOne.addPet("juan", 20)
userOne.countPet()
userOne.addPet("pedro", 2)
userOne.addPet("Polaco", 4)
userOne.countPet()





