import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/Login/Auth/auth.service';
import { UsuarioService } from './Services/Usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project TripWay';

  menuItems = [
    { title: 'Home', icon: 'home', route: '/home' },
    { title: 'Hoteles', icon: 'hotel', route: '/listHoteles' },
    { title: 'Equipajes', icon: 'luggage', route: '/equipajes' },
    { title: 'Promociones', icon: 'local_offer', route: '/promociones' },
    { title: 'Perfil', icon: 'person' },
    { title: 'Comentarios', icon: 'comment', route: '/comentarios' }
  ];

  constructor(public loginService: AuthService, private router: Router, private usuarioService: UsuarioService) {}

  navigate(route: string) {
    if (route === '/listHoteles' && !this.loginService.isLoggedIn()) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate([route]);
    }
  }

  toggleLogin() {
    if (this.loginService.isLoggedIn()) {
      this.loginService.setLoggedIn(false);
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  navigateToUserConfig() {
    if (this.loginService.isLoggedIn()) {
      const cedula = this.usuarioService.getCurrentCedula();
      if (cedula) {
        this.router.navigate(['/usuario', cedula]);
      } else {
        alert('No se ha encontrado el usuario');
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
}

