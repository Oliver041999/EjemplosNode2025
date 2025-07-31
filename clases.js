class Producto{

    constructor(nombre, precio, cantidadStock){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidadStock = cantidadStock;
    }

    mostrarInformacion(){
        return{
            nombre: this.nombre,
            precio: this.precio,
            cantidadStock: this.cantidadStock,
            disponibilidad: this.cantidadStock > 0
        }
    }
}


var prod1 = new Producto("Laptop", 600,1)
prod1.mostrarInformacion

