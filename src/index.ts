// Ejercicio uno 
class Persona{
    public nombre : string;
    public apellido : string;
    public telefono : number;
    public correo : string;
    private codigo : number;

    constructor(nombre : string, apellido : string, telefono : number, correo : string, codigo : number){
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
class PersonaDos{
    public nombre : string;
    public fechaNacimiento : number;
    public anioActual : number;

    constructor(nombre : string, fechaNacimiento : number, anioActual : number){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.anioActual = anioActual;
    }
    public calcularEdad(): number{
        return this.anioActual - this.fechaNacimiento;
    }

    public mostrarEdad(): void{
        console.log("La edad es:"+ this.calcularEdad());
    }

    public ValidaEdad(): void{
        if(this.calcularEdad() >= 0 && this.calcularEdad() <= 2){
            console.log("Es un bebe");
        }else if(this.calcularEdad() > 2 && this.calcularEdad() <= 10){
            console.log("Es un niño o un niña");
}else if(this.calcularEdad() > 10 && this.calcularEdad() <= 14){
    console.log("Es un pre adolescente");
}else if (this.calcularEdad() > 14 && this.calcularEdad() <= 17){
    console.log("Es un adolescente");
}else if (this.calcularEdad() > 17 && this.calcularEdad() <= 30){
    console.log("Es un joven ");
}else if (this.calcularEdad() > 30 && this.calcularEdad() <= 50){
    console.log("Es un adulto");
}else if (this.calcularEdad() > 50){
    console.log("Es un adulto mayor");
}

    }

}
const P2 = new PersonaDos("Maria", 1990, 2026);
P2.mostrarEdad()
P2.ValidaEdad();