import { Habitacion } from "./habitacion";

export class Hotel {
    id: number;
    nombreHotel: string;
    direccionHotel: string;
    habitaciones: Habitacion[];
    pais: string;
    ciudad: string;
    ruta: string;

    constructor(id: number, nombre: string, direccion: string, pais: string, ciudad: string, ruta: string) {
        this.id = id;
        this.nombreHotel = nombre;
        this.direccionHotel = direccion;
        this.habitaciones = [];
        this.pais = pais;
        this.ciudad = ciudad;
        this.ruta = ruta;
    }
}
