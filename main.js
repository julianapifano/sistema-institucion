import Institucion from "./Institucion.js";
import Curso from "./Curso.js";
import Alumno from "./Alumno.js";
import Profesor from "./Profesor.js";

let instituto = new Institucion(
    "Instituto Superior"
);


let poo = new Curso(
    "Programación Orientada a Objetos",
    "POO001"
);


let bd = new Curso(
    "Bases de Datos",
    "BD001"
);


instituto.agregarCurso(poo);
instituto.agregarCurso(bd);


let profesor1 = new Profesor(
    "Carlos",
    "123456",
    "carlos@mail.com"
);


instituto.agregarProfesor(profesor1);


let alumno1 = new Alumno(
    "Juan",
    "111",
    "juan@mail.com"
);


let alumno2 = new Alumno(
    "Maria",
    "222",
    "maria@mail.com"
);


instituto.agregarAlumno(alumno1);
instituto.agregarAlumno(alumno2);



profesor1.asignarCurso(poo);



alumno1.inscribirse(poo);
alumno1.inscribirse(bd);

alumno2.inscribirse(poo);
alumno2.inscribirse(bd);


let inscripcionPOO =
    alumno1.buscarInscripcion(poo);

inscripcionPOO.agregarNota(10);
inscripcionPOO.agregarNota(10);



for(let i=0;i<10;i++){
    inscripcionPOO.registrarAsistencia();
}


let inscripcionBD =
    alumno1.buscarInscripcion(bd);


inscripcionBD.agregarNota(2);
inscripcionBD.agregarNota(2);


for(let i=0;i<3;i++){
    inscripcionBD.registrarAsistencia();
}


profesor1.mostrarReporte();

alumno1.mostrarReporte();