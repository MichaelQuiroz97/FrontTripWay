import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../../Model/Hotel/habitacion';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../../../Services/Hotel/ServicioHotel/hotel.service';

@Component({
  selector: 'app-agregar-editar-habitacion',
  templateUrl: './agregar-editar-habitacion.component.html',
  styleUrl: './agregar-editar-habitacion.component.css'
})
export class AgregarEditarHabitacionComponent implements OnInit {
  hotelId: number;
  habitacionId: number | null = null;
  habitacion: Habitacion = new Habitacion(0, 0, '', 0, '', '', false);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService
  ) {
    this.hotelId = Number(this.route.snapshot.paramMap.get('hotelId'));
    this.habitacionId = this.route.snapshot.paramMap.get('id') ? Number(this.route.snapshot.paramMap.get('id')) : null;
  }

  ngOnInit(): void {
    if (this.habitacionId !== null) {
      const habitacion = this.hotelService.getHabitacionById(this.hotelId, this.habitacionId);
      if (habitacion) {
        this.habitacion = habitacion;
      }
    }
  }

  guardarCambios(): void {
    if (this.habitacionId !== null) {
      this.hotelService.editarHabitacion(this.hotelId, this.habitacionId, this.habitacion);
    } else {
      this.hotelService.agregarHabitacion(this.hotelId, this.habitacion);
    }
    this.router.navigate(['/verHabitaciones', this.hotelId]);
  }

  cancelar(): void {
    this.router.navigate(['/verHabitaciones', this.hotelId]);
  }
}