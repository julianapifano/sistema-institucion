import Persona from "./Persona.js";

class Profesor extends Persona {
    constructor(nombre, dni, email) {
        super(nombre, dni, email);
        this.cursos = [];
    }

    asignarCurso(curso) {
        this.cursos.push(curso);
        curso.agregarProfesor(this);
    }

    mostrarReporte() {
        console.log("==============================");
        console.log("      REPORTE DEL PROFESOR");
        console.log("==============================");

        console.log(
            `Profesor: ${this.nombre}`
        );

        
        console.log("------------------------------");
        console.log("Materias que dicta:");
        this.cursos.forEach(curso => {

            console.log(
                `${curso.nombre}`
            );

            console.log(
                `Alumnos inscriptos: ${curso.alumnos.length}`
            );

        });
        console.log("------------------------------");
    }
}

export default Profesor;