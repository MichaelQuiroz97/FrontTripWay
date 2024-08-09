import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarHotelComponent } from './Components/hotel/agregar-editar-hotel/agregar-editar-hotel.component';
import { AgregarEditarHabitacionComponent } from './Components/hotel/agregar-editar-habitacion/agregar-editar-habitacion.component';
import { ListadoHotelesComponent } from './Components/hotel/listado-hoteles/listado-hoteles.component';
import { VerHotelComponent } from './Components/hotel/ver-hotel/ver-hotel.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './Components/home/home.component';
import { RegistroComponent } from './Components/Login/registro/registro.component';
import { SesionComponent } from './Components/Login/sesion/sesion.component';
import { ComentariosComponent } from './Components/Login/comentarios/comentarios.component';
import { UsuarioComponent } from './Components/Uusario/usuario/usuario.component';
import { ConfirmDialog } from './Components/confirm-dialog/confirm-dialog.component';
import { VerHabitacionComponent } from './Components/hotel/ver-habitacion/ver-habitacion.component';
import { AdminEquipajeComponent } from './Components/Uusario/admin-equipaje/admin-equipaje.component';
import { InfoComponent } from './Components/info/info.component';
import { PromocionDialogComponent } from './Components/promocion-dialog/promocion-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarHotelComponent,
    AgregarEditarHabitacionComponent,
    ListadoHotelesComponent,
    VerHotelComponent,
    HomeComponent,
    RegistroComponent,
    SesionComponent,
    UsuarioComponent,
    ConfirmDialog,
    ComentariosComponent,
    VerHabitacionComponent,
    AdminEquipajeComponent,
    InfoComponent,
    PromocionDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatDialogModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),  
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
