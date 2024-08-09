import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  title = 'actividad-Albia';
  minDate: Date;
  maxDate: Date;
  form: FormGroup;
  hidecontra = true;

  pais: { id: number; valor: string }[] = [
    { id: 1, valor: 'Ecuador' },
    { id: 2, valor: 'Brasil' },
    { id: 3, valor: 'España' },
    { id: 4, valor: 'Francia' },
    { id: 5, valor: 'Italia' }
  ];

  listaUsuario: { cedula: string; nombre: string; apellido: string; fechaNacimiento: Date; pais: number; correo: string; contra: string }[] = [];

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

    this.form = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      pais: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contra: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]]
    });
  }

  agregarUsuario() {
    const usuario = {
      cedula: this.form.value.cedula,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      fechaNacimiento: this.form.value.fechaNacimiento,
      pais: this.form.value.pais,
      correo: this.form.value.correo,
      contra: this.form.value.contra,
    };

    this.listaUsuario.push(usuario);
    this.mensaje("registrado");
    this.form.reset();
  }

  mensaje(texto: string) {
    this._snackBar.open(`La Persona fue ${texto} con éxito`, '', {
      duration: 4000,
      horizontalPosition: 'right'
    });
  }

  limpiar() {
    this.form.reset();
  }

  togglePasswordVisibility() {
    this.hidecontra = !this.hidecontra;
  }
}
