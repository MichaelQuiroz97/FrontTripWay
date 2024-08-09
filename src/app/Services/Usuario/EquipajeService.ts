import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Equipaje } from '../../Interfaces/Equipaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipajeService {

  private readonly myAppUrl = environment.endPoint;
  private readonly myApiUrl = "api/Equipajes";

  //#region Antes
  // private equipajes: Maleta[] = [
  //   { id: 'ABC123', cedula: '123456789', peso: 45, tipo: 'De Mano', estado: 'Recibida' },
  //   { id: 'DEF456', cedula: '987654321', peso: 52, tipo: 'Facturada', estado: 'Viajando' },


    
  // ];

  // private equipajesSubject = new BehaviorSubject<Maleta[]>(this.equipajes);
  // equipajes$ = this.equipajesSubject.asObservable();

  // getEquipajeById(id: string): Maleta | undefined {
  //   return this.equipajes.find(equipaje => equipaje.id === id);
  // }

  // addEquipaje(equipaje: Maleta) {
  //   this.equipajes.push(equipaje);
  //   this.equipajesSubject.next(this.equipajes);
  // }

  // updateEquipaje(updatedEquipaje: Maleta) {
  //   const index = this.equipajes.findIndex(equipaje => equipaje.id === updatedEquipaje.id);
  //   if (index !== -1) {
  //     this.equipajes[index] = updatedEquipaje;
  //     this.equipajesSubject.next(this.equipajes);
  //   }
  // }

  // deleteEquipaje(id: string) {
  //   this.equipajes = this.equipajes.filter(equipaje => equipaje.id !== id);
  //   this.equipajesSubject.next(this.equipajes);
  // }
  //#endregion

  constructor(private http : HttpClient){

  }

  getEquipajes(): Observable<Equipaje[]> {
    return this.http.get<Equipaje[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getEquipajeById(id: number): Observable<Equipaje> {
    return this.http.get<Equipaje>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  addEquipaje(equipaje: Equipaje): Observable<Equipaje> {
    console.log("equipaje enviado",equipaje);
    return this.http.post<Equipaje>(`${this.myAppUrl}${this.myApiUrl}`, equipaje);
  }

  updateEquipaje(id: number, equipaje: Equipaje): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, equipaje);
  }

  deleteEquipaje(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }



}