import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pais } from '../../../Interfaces/Pais';
import { UsuarioService } from '../../../Services/Usuario/usuario.service';
import { ConfirmDialog } from '../../confirm-dialog/confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent /* implements OnInit*/ {

  //#region Antes

  // usuarioForm: FormGroup;
  // editMode: boolean = false;
  // paises: Pais[] = [
  //   { id: 1, nombre: 'España', codigoPais: 'ESP', ciudades: [] },
  //   { id: 2, nombre: 'Francia', codigoPais: 'FRA', ciudades: [] },
  //   { id: 3, nombre: 'Italia', codigoPais: 'ITA', ciudades: [] },
  //   { id: 4, nombre: 'Ecuador', codigoPais: 'ECU', ciudades: [] }
    
  // ];

  // constructor(
  //   private fb: FormBuilder,
  //   private route: ActivatedRoute,
  //   private usuarioService: UsuarioService,
  //   private router: Router,
  //   private _snackBar: MatSnackBar,
  //   public dialog: MatDialog
  // ) {
  //   this.usuarioForm = this.fb.group({
  //     cedula: [{ value: '', disabled: true }, Validators.required],
  //     nombre: [{ value: '', disabled: true }, Validators.required],
  //     fechaNacimiento: [{ value: '', disabled: true }, Validators.required],
  //     paisResidencia: [{ value: '', disabled: true }, Validators.required],
  //     correoElectronico: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
  //     contrasenia: [{ value: '', disabled: true }, Validators.required]
  //   });
  // }

  // ngOnInit(): void {
  //   const cedula = this.route.snapshot.paramMap.get('cedula');
  //   if (cedula) {
  //     const usuario = this.usuarioService.getUsuarioByCedula(cedula);
  //     if (usuario) {
  //       this.usuarioForm.patchValue({
  //         cedula: usuario.cedula,
  //         nombre: usuario.nombre,
  //         fechaNacimiento: this.formatDate(usuario.fechaNacimiento), // Formatea la fecha
  //         paisResidencia: usuario.paisResidencia,
  //         correoElectronico: usuario.correoElectronico,
  //         contrasenia: usuario.contrasenia
  //       });
  //     }
  //   }
  // }

  // formatDate(date: Date): string {
  //   const d = new Date(date);
  //   const formattedDate = `${d.getFullYear()}-${('0' + (d.getMonth() + 1)).slice(-2)}-${('0' + d.getDate()).slice(-2)}`;
  //   return formattedDate;
  // }

  // editar(): void {
  //   this.editMode = true;
  //   this.usuarioForm.get('nombre')?.enable();
  //   this.usuarioForm.get('fechaNacimiento')?.enable();
  //   this.usuarioForm.get('paisResidencia')?.enable();
  // }

  // guardar(): void {
  //   if (this.usuarioForm.valid) {
  //     const cedula = this.usuarioForm.get('cedula')?.value;
  //     if (cedula) {
  //       this.usuarioService.actualizarUsuarioByCedula(cedula, this.usuarioForm.value);
  //       this._snackBar.open('Usuario actualizado con éxito', '', {
  //         duration: 5000,
  //         horizontalPosition: 'center',
  //         verticalPosition: 'bottom'
  //       });
  //       this.editMode = false;
  //       this.usuarioForm.get('nombre')?.disable();
  //       this.usuarioForm.get('fechaNacimiento')?.disable();
  //       this.usuarioForm.get('paisResidencia')?.disable();
  //     }
  //   }
  // }

  // eliminarCuenta(): void {
  //   const dialogRef = this.dialog.open(ConfirmDialog, {
  //     width: '250px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       const cedula = this.usuarioForm.get('cedula')?.value;
  //       if (cedula) {
  //         this.usuarioService.eliminarUsuarioByCedula(cedula);
  //         this.router.navigate(['/login']);
  //         this._snackBar.open('Cuenta eliminada con éxito', '', {
  //           duration: 5000,
  //           horizontalPosition: 'center',
  //           verticalPosition: 'bottom'
  //         });
  //       }
  //     }
  //   });
  // }

  //#endregion
}