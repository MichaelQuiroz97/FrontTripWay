import { Injectable } from '@angular/core';
import { Habitacion } from '../../../Model/Hotel/habitacion';
import { Hotel } from '../../../Model/Hotel/hotel';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private readonly myAppUrl = environment.endPoint;
  private readonly myApiUrl = 'api/Promociones';
  public hoteles: Hotel[] = [
    
    {
      id: 1,
      nombreHotel: 'Hotel Hilton Colón',
      direccionHotel: 'Calle 1, 2, 3',
      habitaciones: [
        new Habitacion(1, 1, '101', 2, 'Habitación doble con vista al mar', 'Suite',false),
        new Habitacion(2, 1, '102', 4, 'Habitación cuádruple con balcón', 'Familiar', false)
      ],
      pais: 'Ecuador',
      ciudad: 'Guayaquil',
      ruta: 'https://www.hilton.com/im/en/GYEHIHF/10712026/hcg-propertyinteriorview-1.jpg?impolicy=crop&cw=5399&ch=3022&gravity=NorthWest&xposition=0&yposition=288&rw=768&rh=430'
    },
    {
      id: 2,
      nombreHotel: 'Caesars Paace',
      direccionHotel: 'Avenida 4, 5, 6',
      habitaciones: [
        new Habitacion(3, 2, '201', 1, 'Habitación individual económica', 'Personal', false),
        new Habitacion(4, 2, '202', 3, 'Habitación triple con terraza', 'Familiar', false)
      ],
      pais: 'Estados Unidos',
      ciudad: 'Washington',
      ruta: 'https://lh5.googleusercontent.com/p/AF1QipOs-TmU1n9oqxFu6m2z86HeM54ivReJ7FYMRGnD=w252-h157-k-no'
    },
    {
      id: 3,
      nombreHotel: 'Hotel Rio',
      direccionHotel: 'Avenida 10, 11, 12',
      habitaciones: [
        new Habitacion(7, 4, '401', 3, 'Habitación triple con vista al río', 'Suite', false),
        new Habitacion(8, 4, '402', 4, 'Habitación cuádruple familiar', 'Familiar',false)
      ],
      pais: 'Brasil',
      ciudad: 'Río de Janeiro',
      ruta: 'https://st.depositphotos.com/2288675/2455/i/450/depositphotos_24553989-stock-photo-hotel.jpg'
    }
  ];

 
  constructor() {}

  getHoteles(): Hotel[] {
    return this.hoteles;
  }

  getHotelById(id: number): Hotel | undefined {
    return this.hoteles.find(hotel => hotel.id === id);
  }

  editarHotel(id: number, hotelActualizado: Hotel): void {
    const index = this.hoteles.findIndex(hotel => hotel.id === id);
    if (index !== -1) {
      this.hoteles[index] = hotelActualizado;
    }
  }

  getHabitacionById(hotelId: number, habitacionId: number): Habitacion | undefined {
    const hotel = this.hoteles.find(h => h.id === hotelId);
    if (hotel) {
      return hotel.habitaciones.find(habitacion => habitacion.id === habitacionId);
    }
    return undefined;
  }

  agregarHabitacion(hotelId: number, habitacion: Habitacion): void {
    const hotel = this.hoteles.find(h => h.id === hotelId);
    if (hotel) {
      habitacion.id = this.getNextHabitacionId();
      hotel.habitaciones.push(habitacion);
    }
  }

  editarHabitacion(hotelId: number, habitacionId: number, habitacionActualizada: Habitacion): void {
    const hotel = this.hoteles.find(h => h.id === hotelId);
    if (hotel) {
      const habitacionIndex = hotel.habitaciones.findIndex(h => h.id === habitacionId);
      if (habitacionIndex !== -1) {
        hotel.habitaciones[habitacionIndex] = habitacionActualizada;
      }
    }
  }

  eliminarHabitacion(hotelId: number, habitacionId: number): void {
    const hotel = this.hoteles.find(h => h.id === hotelId);
    if (hotel) {
      hotel.habitaciones = hotel.habitaciones.filter(h => h.id !== habitacionId);
    }
  }

  private getNextHabitacionId(): number {
    return this.hoteles.reduce((maxId, hotel) => {
      const maxRoomId = hotel.habitaciones.reduce((max, habitacion) => Math.max(max, habitacion.id), 0);
      return Math.max(maxId, maxRoomId);
    }, 0) + 1;
  }
}
