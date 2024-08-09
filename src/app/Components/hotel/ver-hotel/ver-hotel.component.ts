import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../../Model/Hotel/habitacion';
import { Hotel } from '../../../Model/Hotel/hotel';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../../../Services/Hotel/ServicioHotel/hotel.service';
import { Pais } from '../../../Interfaces/Pais';

@Component({
  selector: 'app-ver-hotel',
  templateUrl: './ver-hotel.component.html',
  styleUrl: './ver-hotel.component.css'
})
export class VerHotelComponent implements OnInit {
  hotelId: number;
  hotel: Hotel | undefined;
  editMode = false;
  hotelActualizado: Hotel | undefined;

  paises: Pais[] = [
    { id: 1, nombre: 'España', codigoPais: 'ESP', ciudades: [] },
    { id: 2, nombre: 'Francia', codigoPais: 'FRA', ciudades: [] },
    { id: 3, nombre: 'Italia', codigoPais: 'ITA', ciudades: [] },
    { id: 4, nombre: 'Ecuador', codigoPais: 'ECU', ciudades: [] }
  ];

  constructor(private route: ActivatedRoute, private hotelService: HotelService) {
    this.hotelId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getHotel();
  }

  private getHotel(): void {
    this.hotel = this.hotelService.getHotelById(this.hotelId);
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      this.hotelActualizado = undefined;
    } else {
      // Clonar el hotel para editar
      this.hotelActualizado = { ...this.hotel! };
    }
  }

  guardarCambios(): void {
    if (this.hotelActualizado) {
      this.hotelService.editarHotel(this.hotelId, this.hotelActualizado);
      this.getHotel(); // Recargar la información del hotel después de guardar los cambios
      this.toggleEditMode();
    }
  }
}
