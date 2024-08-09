export class Usuario{
    cedula:string;
    nombre:string;
    fechaNacimiento:Date;
    paisResidencia: string;
    //credenciales
    correoElectronico:string;
    contrasenia:string;

    constructor(cedula:string, nombre:string, fechaNacimiento:Date, pais:string,correo:string,contrasenia:string){
        this.cedula = cedula;
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.paisResidencia = pais;
        this.correoElectronico = correo;
        this.contrasenia = contrasenia;
    }

}