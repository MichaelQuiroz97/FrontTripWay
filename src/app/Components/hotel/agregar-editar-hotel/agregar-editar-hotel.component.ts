import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../../../Services/Hotel/ServicioHotel/hotel.service';
import { Pais } from '../../../Interfaces/Pais';
import { Hotel } from '../../../Model/Hotel/hotel';

@Component({
  selector: 'app-agregar-editar-hotel',
  templateUrl: './agregar-editar-hotel.component.html',
  styleUrl: './agregar-editar-hotel.component.css'
})
export class AgregarEditarHotelComponent {
[x: string]: any;

hotelId: number;
hotelActualizado: Hotel | undefined;

paises: Pais[] = [
  { id: 1, nombre: 'España', codigoPais: 'ESP', ciudades: [] },
  { id: 2, nombre: 'Francia', codigoPais: 'FRA', ciudades: [] },
  { id: 3, nombre: 'Italia', codigoPais: 'ITA', ciudades: [] },
  { id: 4, nombre: 'Ecuador', codigoPais: 'ECU', ciudades: [] }
];

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private hotelService: HotelService
) {
  this.hotelId = Number(this.route.snapshot.paramMap.get('id'));
}

ngOnInit(): void {
  this.getHotel();
}

private getHotel(): void {
  const hotel = this.hotelService.getHotelById(this.hotelId);
  if (hotel) {
    this.hotelActualizado = { ...hotel };
  }
}

guardarCambios(): void {
  if (this.hotelActualizado) {
    this.hotelService.editarHotel(this.hotelId, this.hotelActualizado);
    this.router.navigate(['/verHotel', this.hotelId]);
  }
}

cancelar(): void {
  this.router.navigate(['/verHotel', this.hotelId]);
}
}

