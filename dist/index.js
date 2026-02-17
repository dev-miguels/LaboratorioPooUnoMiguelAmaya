"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ejercicio uno 
class Persona {
    constructor(nombre, apellido, telefono, correo, codigo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codigo = codigo;
    }
}
const P1 = new Persona("Juan", "Perez", 123456789, "juan@correo.com", 12345);
console.log(P1);
// Ejercicio tres
class PersonaDos {
    constructor(nombre, fechaNacimiento, anioActual) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.anioActual = anioActual;
    }
    calcularEdad() {
        return this.anioActual - this.fechaNacimiento;
    }
    mostrarEdad() {
        console.log("La edad es:" + this.calcularEdad());
    }
    ValidaEdad() {
        if (this.calcularEdad() >= 0 && this.calcularEdad() <= 2) {
            console.log("Es un bebe");
        }
        else if (this.calcularEdad() > 2 && this.calcularEdad() <= 10) {
            console.log("Es un niño o un niña");
        }
        else if (this.calcularEdad() > 10 && this.calcularEdad() <= 14) {
            console.log("Es un pre adolescente");
        }
        else if (this.calcularEdad() > 14 && this.calcularEdad() <= 17) {
            console.log("Es un adolescente");
        }
        else if (this.calcularEdad() > 17 && this.calcularEdad() <= 30) {
            console.log("Es un joven ");
        }
        else if (this.calcularEdad() > 30 && this.calcularEdad() <= 50) {
            console.log("Es un adulto");
        }
        else if (this.calcularEdad() > 50) {
            console.log("Es un adulto mayor");
        }
    }
}
const P2 = new PersonaDos("Maria", 1990, 2026);
P2.mostrarEdad();
P2.ValidaEdad();
//ejercicio dos
class Venta {
    constructor(producto, cantidad, precio, iva) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;
        this.iva = iva;
    }
    TotalVenta() {
        return this.cantidad * this.precio;
    }
    AplicarIva(iva) {
        return this.TotalVenta() * iva;
    }
    VentaConIva(descuento) {
        return this.TotalVenta() + this.AplicarIva(this.iva) - descuento;
    }
    DatosVenta() {
        console.log("Producto: " + this.producto);
        console.log("Cantidad: " + this.cantidad);
        console.log("Precio: " + this.precio);
        console.log("IVA: " + this.iva);
        console.log("Total de la venta " + this.AplicarIva(this.iva));
        console.log("Total cde la venta con descuento: " + this.VentaConIva(0.10 * this.TotalVenta()));
        console.log("El descuento aplicado es: " + (0.10 * this.TotalVenta()));
    }
}
const V1 = new Venta("Camisa", 1, 100, 0.13);
V1.DatosVenta();
//# sourceMappingURL=index.js.map