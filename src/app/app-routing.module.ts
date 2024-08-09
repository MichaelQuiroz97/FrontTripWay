import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoHotelesComponent } from './Components/hotel/listado-hoteles/listado-hoteles.component';
import { AgregarEditarHabitacionComponent } from './Components/hotel/agregar-editar-habitacion/agregar-editar-habitacion.component';
import { AgregarEditarHotelComponent } from './Components/hotel/agregar-editar-hotel/agregar-editar-hotel.component';
import { VerHotelComponent } from './Components/hotel/ver-hotel/ver-hotel.component';
import { HomeComponent } from './Components/home/home.component';
import { SesionComponent } from './Components/Login/sesion/sesion.component';
import { RegistroComponent } from './Components/Login/registro/registro.component';
import { AuthGuardServiceService } from './Services/Login/Auth/auth-guard-service.service';
import { UsuarioComponent } from './Components/Uusario/usuario/usuario.component';
import { ComentariosComponent } from './Components/Login/comentarios/comentarios.component';
import { VerHabitacionComponent } from './Components/hotel/ver-habitacion/ver-habitacion.component';
import { AdminEquipajeComponent } from './Components/Uusario/admin-equipaje/admin-equipaje.component';
import { InfoComponent } from './Components/info/info.component';
import { PromocionDialogComponent } from './Components/promocion-dialog/promocion-dialog.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'listHoteles', component: ListadoHotelesComponent, canActivate: [AuthGuardServiceService] },
  { path: 'verHotel/:id', component: VerHotelComponent },
  { path: 'agregarHotel', component: AgregarEditarHotelComponent },
  { path: 'editarHotel/:id', component: AgregarEditarHotelComponent },
  { path: 'login', component: SesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'equipajes', component: AdminEquipajeComponent },
  { path: 'verHabitaciones/:hotelId', component: VerHabitacionComponent },
  { path: 'promociones', component: InfoComponent },
  { path: 'promocion/:id', component: PromocionDialogComponent },
  { path: 'agregarHabitacion/:hotelId', component: VerHabitacionComponent },
  { path: 'comentarios', component: ComentariosComponent, canActivate: [AuthGuardServiceService] },
  { path: 'usuario/:cedula', component: UsuarioComponent },
  { path: '**', redirectTo: 'home' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }