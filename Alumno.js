import Persona from "./Persona.js";
import Inscripcion from "./Inscripcion.js";

class Alumno extends Persona {
    constructor(nombre, dni, email) {
        super(nombre, dni, email);
        this.inscripciones = [];
    }

    inscribirse(curso) {
        let nuevaInscripcion = new Inscripcion(
            this,
            curso
        );

        this.inscripciones.push(nuevaInscripcion);
        curso.agregarAlumno(this);
    }

    buscarInscripcion(curso) {
        return this.inscripciones.find(
            inscripcion =>
                inscripcion.curso.codigo === curso.codigo
        );
    }



    mostrarReporte() {

        console.log("==============================");
        console.log("       REPORTE DEL ALUMNO");
        console.log("==============================");

        console.log(
            `Nombre: ${this.nombre}`
        );

        console.log(
            `DNI: ${this.dni}`
        );


        console.log("Materias cursadas:");
        console.log("------------------------------");


        this.inscripciones.forEach(inscripcion => {
            console.log(
                `Materia: ${inscripcion.curso.nombre}`
            );

            console.log(
                `Código: ${inscripcion.curso.codigo}`
            );

            console.log(
                `Notas: ${inscripcion.notas.length > 0
                    ? inscripcion.notas.join(" - ")
                    : "Sin notas"
                }`
            );

            console.log(
                `Asistencias: ${inscripcion.asistencias}`
            );

            console.log(
                `Promedio: ${inscripcion.calcularPromedio().toFixed(2)
                }`
            );

            console.log(
                `Estado: ${inscripcion.obtenerEstado()}`
            );
            console.log("------------------------------");
        });
    }
}

export default Alumno;