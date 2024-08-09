import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { MetodoPago } from '../Interfaces/MetodoPago';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetodopagoService {
  private myAppUrl: string=environment.endpoint;
  private myApiUrl: string='api/MetodoPago/';

  constructor(private http: HttpClient) { }

 obtenerTodos(): Observable<MetodoPago[]> {
    return this.http.get<MetodoPago[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  obtenerPorId(id: number): Observable<MetodoPago> {
    return this.http.get<MetodoPago>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  crear(metodoPago: MetodoPago): Observable<MetodoPago> {
    return this.http.post<MetodoPago>(`${this.myAppUrl}${this.myApiUrl}`, metodoPago);
  }

  modificar(id: number, metodoPago: MetodoPago): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, metodoPago);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
}

/* 
  const a = 'hola'
  a -> tipo string
  const b = ['hola','como','estas']
  b -> array -> string[] -> array de strings
  const b = [1,2,3]
  b -> number[]
  const c = [false,true]
  c -> boolean[]
  




*/