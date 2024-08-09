import { AfterViewInit, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Hotel } from '../../../Model/Hotel/hotel';
import { HotelService } from '../../../Services/Hotel/ServicioHotel/hotel.service';

@Component({
  selector: 'app-listado-hoteles',
  templateUrl: './listado-hoteles.component.html',
  styleUrl: './listado-hoteles.component.css'
})
export class ListadoHotelesComponent implements AfterViewInit, OnInit {
  public lisHoteles: Hotel[] = [];
  public dataSource = new MatTableDataSource<Hotel>();

  displayedColumns: string[] = ['id', 'nombreHotel', 'direccionHotel', 'pais', 'ciudad', 'ruta', 'acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ServicioHotel: HotelService) { }

  ngOnInit(): void {
    this.lisHoteles = this.ServicioHotel.getHoteles();
    this.dataSource.data = this.lisHoteles;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  eliminarHotel(id: number): void {
    this.lisHoteles = this.lisHoteles.filter(hotel => hotel.id !== id);
    this.dataSource.data = this.lisHoteles;
  }



}

