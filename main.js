let fs = require('fs')

class Product {
    constructor(id,title, price, img){
        this.id = id
        this.title = title
        this.pice = price
        this.img = img
    }
}

class Contenedor {
    constructor(ruta){

        this.ruta = ruta
        this.list = []

        this.save = (props) => {
            
            fs.appendFile(ruta,JSON.stringify(props), status => {
                if(status){
                    console.log(`No se pudo agregar el producto ${props.title}`)
                }else{
                    console.log('Guardado con exito :)')
                }
            })
            
        }
        
        this.getAll = () => {

            fs.readFile(this.ruta, 'utf-8', (status, response) => {
                if(status){
                    console.log(`Hubo un error con el archivo ${this.ruta}`)
                }else{
                    console.log(response)
                    this.list.push(response)
                    console.log(this.list)
                }
            })

        }
        this.deleteAll = () => {
            fs.unlink(ruta, status => {
                if(status){
                    console.log('error')
                }else{
                    console.log('eliminado')
                }
            })
        }
    }
}

let productos = new Contenedor("./productos.txt")


productos.save(new Product(1,"Camara", 6000, "futura url"))
productos.save(new Product(2,"Cuaderno fachero", 4000, "futura url"))
productos.save(new Product(3,"Lapiz fachero", 4000, "futura url"))
productos.getAll()
productos.deleteAll()
// productos.getById()