import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/Login/Auth/auth.service';
import { UsuarioService } from '../../../Services/Usuario/usuario.service';


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {
  //#region Antes
  // title = 'actividad-Albia';
  // form: FormGroup;
  // loading = false;

  // constructor(
  //   private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private authService: AuthService,
  //   private usuarioService: UsuarioService) 
  //   {
  //   this.form = this.fb.group({
  //     user: ['', Validators.required],
  //     password: ['', Validators.required]
  //   });
  // }

  // ngOnInit(): void {}

  // ingresar() {
  //   const user = this.form.value.user;
  //   const password = this.form.value.password;

  //   const usuario = this.usuarioService.getUsuarioByCorreo(user); // Buscar usuario por correo electrónico

  //   if (usuario && usuario.contrasenia === password) {
  //     this.authService.setLoggedIn(true);  // Establece el estado de autenticación a true
  //     this.usuarioService.setCurrentCedula(usuario.cedula); // Guarda la cédula del usuario actual
  //     this.router.navigate(['/home']);  // Redirige a la página de inicio
  //   } else {
  //     this.error();
  //   }
  // }

  // error() {
  //   this._snackBar.open('Usuario o contraseña ingresados son inválidos', '', {
  //     duration: 5000,
  //     horizontalPosition: 'center',
  //     verticalPosition: 'bottom'
  //   });
  // }

  // faLoading() {
  //   this.loading = true;
  //   setTimeout(() => {
  //     this.loading = false;
  //   });
  // }

  // navigateToRegistro() {
  //   this.router.navigate(['registro']);
  // }
  //#endregion

  title = 'actividad-Albia';
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder, 
    private _snackBar: MatSnackBar, 
    private router: Router, 
    private authService: AuthService,
    private usuarioService: UsuarioService
  ) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  ingresar() {
    const user = this.form.value.user;
    const password = this.form.value.password;

    this.usuarioService.getUsuarioByCorreo(user, password).subscribe(
      usuario => {
        if (usuario) {
          this.usuarioService.setCurrentCedula(usuario.cedula);
          this.authService.setLoggedIn(true);
          this.router.navigate(['/home']);
        } else {
          this.error();
        }
      },
      error => {
        this.error();
      }
    );
}

  error() {
    this._snackBar.open('Usuario o contraseña ingresados son inválidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  faLoading() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    });
  }

  navigateToRegistro() {
    this.router.navigate(['registro']);
  }

}