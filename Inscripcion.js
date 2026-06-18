class Inscripcion {

    constructor(alumno, curso){
        this.alumno = alumno;
        this.curso = curso;

        this.notas = [];
        this.asistencias = 0;

    }


    agregarNota(nota){
        this.notas.push(nota);
    }


    registrarAsistencia(){
        this.asistencias++;
    }


    calcularPromedio(){
        if(this.notas.length === 0){
            return 0;
        }

        let suma = this.notas.reduce(
            (total, nota) => total + nota,
            0
        );

        return suma / this.notas.length;
    }



    obtenerEstado(){
        let promedio = this.calcularPromedio();

        if(promedio >= 7 && this.asistencias >= 8){

            return "PROMOCIONADO";

        }

        else if(promedio >= 4){

            return "REGULAR";

        }

        else{

            return "LIBRE";

        }
    }
}

export default Inscripcion;