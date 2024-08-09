export class Habitacion {
    id: number;
  hotelId: number;
  roomNumber: string;
  capacity: number;
  description: string;
  tipoHabitacion: string;
  estado:boolean;

  constructor(id: number, hotelId: number, roomNumber: string, capacity: number, description: string,tipoHabitacion: string, estado:boolean) {
    this.id = id;
    this.hotelId = hotelId;
    this.roomNumber = roomNumber;
    this.capacity = capacity;
    this.description = description;
    this.tipoHabitacion = tipoHabitacion;
    this.estado= estado;
  }
}
