import { Injectable } from '@angular/core';
import { Habitacion } from '../../../Model/Hotel/habitacion';
import { Hotel } from '../../../Model/Hotel/hotel';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private readonly myAppUrl = environment.endPoint;
  private readonly myApiUrl = 'api/Hotel';

  constructor(private http: HttpClient) { }

  getHotel(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

  addHotel(hotel: Hotel): Observable<any> {
    console.log("Datos enviado",hotel);

    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, hotel);
  }

  updateHotel(actHotel: Hotel): Observable<any> {
    return this.http.put(`${this.myAppUrl}${this.myApiUrl}/${actHotel.id}`, actHotel);
  }

  deleteHotel(id: number): Observable<any> {
    return this.http.delete(`${this.myAppUrl}${this.myApiUrl}/${id}`);
  }

 




}
