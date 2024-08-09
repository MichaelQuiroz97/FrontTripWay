import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Reserva } from '../Interfaces/Reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private myAppUrl: string=environment.endpoint;
  private myApiUrl: string='api/Reserva'
;

  constructor(private http: HttpClient) { }

  obtenerTodos(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  obtenerPorId(id: number): Observable<Reserva> {
    return this.http.get<Reserva>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  crear(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(`${this.myAppUrl}${this.myApiUrl}`, reserva);
  }

  modificar(id: number, reserva: Reserva): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`, reserva);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }
}
