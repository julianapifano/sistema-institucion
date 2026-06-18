class Institucion {
    constructor(nombre){
        this.nombre = nombre;
        this.cursos = [];
        this.alumnos = [];
        this.profesores = [];
    }

    agregarCurso(curso){
        this.cursos.push(curso);
    }

    agregarAlumno(alumno){
        this.alumnos.push(alumno);
    }

    agregarProfesor(profesor){
        this.profesores.push(profesor);
    }
}

export default Institucion;