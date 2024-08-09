
import { Injectable } from '@angular/core';
import { Usuario } from '../../Model/Usuario/Usuario';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
//#region Antes

  // private currentCedula: string | undefined;
  // private readonly myAppUrl = environment.endPoint;
  // private readonly myApiUrl ="api/Usuarios";

  //  usuarios: Usuario[] = [
  //   {
  //     cedula: '123456789',
  //     nombre: 'Juan Pérez',
  //     fechaNacimiento: new Date,
  //     paisResidencia: 'ESPAÑA',
  //     correoElectronico: 'juan.perez@email.com',
  //     contrasenia: 'password123'
  //   },
  //   {
  //     cedula: '987654321',
  //     nombre: 'María Gómez',
  //     fechaNacimiento: new Date('1990-02-02'), 
  //     paisResidencia: 'ECUADOR', 
  //     correoElectronico: 'maria.gomez@email.com',
  //     contrasenia: 'password456'
  //   },
  //   {
  //     cedula: '000000000',
  //     nombre: 'Pedro Zambrano',
  //     fechaNacimiento: new Date('1995-03-03'),
  //     paisResidencia: 'FRANCIA',
  //     correoElectronico: 'pierre.dupont@email.com',
  //     contrasenia: 'motdepasse123'
  //   },
  //   {
  //     cedula: '111111111',
  //     nombre: 'Anna Rossi',
  //     fechaNacimiento: new Date('2000-04-04'), 
  //     paisResidencia: 'ITALIA',
  //     correoElectronico: 'anna.rossi@email.com',
  //     contrasenia: 'passworditalia'
  //   }
  // ];

  // getUsuarios(){
  //   return this.usuarios;
  // }

  // getUsuarioByCedula(cedula: string): Usuario | undefined {
  //   return this.usuarios.find(usuario => usuario.cedula === cedula);
  // }

  // // Delete a user by cedula
  // eliminarUsuarioByCedula(cedula: string): void {
  //   const index = this.usuarios.findIndex(usuario => usuario.cedula === cedula);
  //   if (index !== -1) {
  //     this.usuarios.splice(index, 1);
  //   }
  // }


  // actualizarUsuarioByCedula(cedula: string, nuevoUsuario: Usuario): void {
  //   const usuario = this.usuarios.find(usuario => usuario.cedula === cedula);
  //   if (usuario) {
  //     usuario.nombre = nuevoUsuario.nombre; 
  //     usuario.fechaNacimiento = nuevoUsuario.fechaNacimiento;
  //     usuario.paisResidencia = nuevoUsuario.paisResidencia;
  //     usuario.correoElectronico = nuevoUsuario.correoElectronico; 
  //     usuario.contrasenia = nuevoUsuario.contrasenia;
  //   }
  // }

  // getUsuarioByCorreo(correo: string): Usuario | undefined {
  //   return this.usuarios.find(usuario => usuario.correoElectronico === correo);
  // }
  
  // setCurrentCedula(cedula: string): void {
  //   this.currentCedula = cedula;
  // }

  // getCurrentCedula(): string | undefined {
  //   return this.currentCedula;
  // }

  //#endregion

  private currentCedula: string | undefined;
  private readonly myAppUrl = environment.endPoint;
  private readonly myApiUrl = "api/Usuarios";

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getUsuarioByCedula(cedula: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.myAppUrl}${this.myApiUrl}/${cedula}`);
  }

  addUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.myAppUrl}${this.myApiUrl}`, usuario);
  }

  eliminarUsuarioByCedula(cedula: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}/${cedula}`);
  }

  actualizarUsuarioByCedula(cedula: string, nuevoUsuario: Usuario): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}/${cedula}`, nuevoUsuario);
  }

  getUsuarioByCorreo(correo: string, contrasenia: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.myAppUrl}${this.myApiUrl}/byCorreo/${correo}/${contrasenia}`);
}

  setCurrentCedula(cedula: string): void {
    this.currentCedula = cedula;
  }

  getCurrentCedula(): string | undefined {
    return this.currentCedula;
  }
  

}
