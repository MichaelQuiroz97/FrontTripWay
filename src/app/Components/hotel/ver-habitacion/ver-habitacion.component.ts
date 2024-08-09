import { Component, OnInit, ViewChild } from '@angular/core';
import { Habitacion } from '../../../Model/Hotel/habitacion';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../../../Services/Hotel/ServicioHotel/hotel.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-ver-habitacion',
  templateUrl: './ver-habitacion.component.html',
  styleUrls: ['./ver-habitacion.component.css']
})
export class VerHabitacionComponent implements OnInit {
  hotelId: number;
  habitaciones: Habitacion[] = [];
  dataSource = new MatTableDataSource<Habitacion>();
  displayedColumns: string[] = ['roomNumber', 'capacity', 'description', 'tipoHabitacion', 'estado', 'acciones'];
  editIndex: number | null = null;
  newHabitacion: Habitacion | null = null;
  tiposHabitacion: string[] = ['Simple', 'Doble', 'Suite'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService
  ) {
    this.hotelId = Number(this.route.snapshot.paramMap.get('hotelId'));
  }

  ngOnInit(): void {
    const hotel = this.hotelService.getHotelById(this.hotelId);
    if (hotel) {
      this.habitaciones = hotel.habitaciones;
      this.dataSource.data = this.habitaciones;
    }
  }

  editarHabitacion(index: number): void {
    this.editIndex = index;
  }

  guardarHabitacion(index: number): void {
    this.editIndex = null;
    // Aquí puedes agregar la lógica para guardar los cambios en el servicio si es necesario
  }

  cancelarEdicion(): void {
    this.editIndex = null;
  }

  eliminarHabitacion(habitacionId: number): void {
    this.hotelService.eliminarHabitacion(this.hotelId, habitacionId);
    this.habitaciones = this.habitaciones.filter(h => h.id !== habitacionId);
    this.dataSource.data = this.habitaciones;
  }

  agregarHabitacion(): void {
    this.newHabitacion = new Habitacion(0, this.hotelId, '', 0, '', 'Simple', false);
  }

  guardarNuevaHabitacion(): void {
    if (this.newHabitacion) {
      this.hotelService.agregarHabitacion(this.hotelId, this.newHabitacion);
      this.habitaciones.push(this.newHabitacion);
      this.dataSource.data = this.habitaciones;
      this.newHabitacion = null;
    }
  }

  cancelarNuevaHabitacion(): void {
    this.newHabitacion = null;
  }
}