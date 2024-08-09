import { Injectable } from '@angular/core';
import { Habitacion } from '../../../Model/Hotel/habitacion';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  private readonly myAppUrl = environment.endPoint;
  private readonly myApiUrl = "api/Habitacion";

  constructor(private http: HttpClient) { }

  getHabitaciones(): Observable<Habitacion[]> {
    return this.http.get<Habitacion[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getHabitacionById(id: number): Observable<Habitacion> {
    return this.http.get<Habitacion>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  addHabitacion(habitacion: Habitacion): Observable<any> {
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, habitacion);
  }

  updateHabitacion(updatedHabitacion: Habitacion): Observable<any> {
    return this.http.put(`${this.myAppUrl}${this.myApiUrl}/${updatedHabitacion.id}`, updatedHabitacion);
  }

  deleteHabitacion(id: number): Observable<any> {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

}
