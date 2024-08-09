import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PromocionDialogComponent } from '../promocion-dialog/promocion-dialog.component';
import { InformacionService } from '../../Services/Info/informacion.service';
import { Promocion } from './../../Model/Usuario/Promocion';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  listadoPromociones: Promocion[] = [];
  isLoading = true;

  constructor(private promocionService: InformacionService, private dialog: MatDialog) { }
  obtenerPromociones() {
    this.promocionService.getPromociones().subscribe(
      data => {
        this.listadoPromociones = data;
        this.isLoading = false;
      },
      error => {
        console.error('Error al obtener las promociones:', error);
        this.isLoading = false;
      }
    );
  }
  ngOnInit(): void {
    this.obtenerPromociones();
  }

 

  openPromocionDialog(id?: number): void {
    const dialogRef = this.dialog.open(PromocionDialogComponent, {
      width: '400px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.obtenerPromociones();
      }
    });
  }

  deletePromocion(id: number): void {
    this.promocionService.deletePromocion(id).subscribe(() => {
      this.obtenerPromociones();
    });
  }
}
