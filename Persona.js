class Persona {
    constructor(nombre, dni, email){
        this.nombre = nombre;
        this.dni = dni;
        this.email = email;
    }
    
    presentarse(){
        console.log(
            `Hola soy ${this.nombre}, DNI: ${this.dni}`
        );
    }
}

export default Persona;