export class Comentario{
    id: number;
    comentario:string;
    usuario:string;

    constructor(id:number, comentario:string, Usuario:string){

        this.id= id;
        this.comentario = comentario;
        this.usuario = Usuario;

    }
}