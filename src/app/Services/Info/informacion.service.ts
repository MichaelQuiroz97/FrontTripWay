import { Injectable } from '@angular/core';
import { Promocion } from '../../Model/Usuario/Promocion';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

export interface PromocionDTO {
  Titulo: string;
  Descripcion: string;
  Destino: string;
  Precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  //#region Antes
  // promociones: Promocion[] = [
  //   { id: 1, titulo: 'Descuento en viaje a París', descripcion: 'Aprovecha un descuento del 20% en tu viaje a París.', destino: 'París, Francia', precio: 1200.00 },
  //   { id: 2, titulo: 'Oferta especial para Roma', descripcion: 'Disfruta de un 15% de descuento en tu próximo viaje a Roma.', destino: 'Roma, Italia', precio: 1500.00 }
  // ];

  // constructor() { }

  // getPromociones(): Observable<Promocion[]> {
  //   return of(this.promociones);
  // }

  // getPromocionById(id: number): Observable<Promocion | undefined> {
  //   return of(this.promociones.find(promo => promo.id === id));
  // }

  // addPromocion(promocion: Promocion): void {
  //   this.promociones.push(promocion);
  // }

  // updatePromocion(updatedPromocion: Promocion): void {
  //   const index = this.promociones.findIndex(promo => promo.id === updatedPromocion.id);
  //   if (index !== -1) {
  //     this.promociones[index] = updatedPromocion;
  //   }
  // }

  // deletePromocion(id: number): void {
  //   this.promociones = this.promociones.filter(promo => promo.id !== id);
  // }

  //#endregion

promocionesAdd! :PromocionDTO;  

  private readonly myAppUrl = environment.endPoint;
  private readonly myApiUrl = "api/Promociones";

  constructor(private http: HttpClient) { }

  getPromociones(): Observable<Promocion[]> {
    return this.http.get<Promocion[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getPromocionById(id: number): Observable<Promocion> {
    return this.http.get<Promocion>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  addPromocion(promocion: Promocion): Observable<any> {
    console.log("Datos enviado",promocion);
    //promocion.Id=0;

    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, promocion);
  }

  updatePromocion(updatedPromocion: Promocion): Observable<any> {
    return this.http.put(`${this.myAppUrl}${this.myApiUrl}/${updatedPromocion.id}`, updatedPromocion);
  }

  deletePromocion(id: number): Observable<any> {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

}
