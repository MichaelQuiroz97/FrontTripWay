import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../Services/Usuario/usuario.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Equipaje } from '../../../Interfaces/Equipaje';
import { EquipajeService } from '../../../Services/Usuario/EquipajeService';
import e from 'express';

@Component({
  selector: 'app-admin-equipaje',
  templateUrl: './admin-equipaje.component.html',
  styleUrl: './admin-equipaje.component.css'
})
export class AdminEquipajeComponent implements OnInit{
// }
// registrarEquipaje() {
//   if (!this.usuarioValido) {
//     alert('Por favor, valide el usuario antes de registrar el equipaje.');
//     return;
//   }
//   const nuevoId = this.generarIdEquipaje();
//   this.nuevoEquipaje.id = nuevoId;
//   this.equipajeService.addEquipaje(this.nuevoEquipaje);
//   alert('Equipaje registrado con éxito');
//   this.mostrarFactura(this.nuevoEquipaje);
//   this.nuevoEquipaje = this.crearEquipajeVacio();
//   this.usuarioValido = false;
// }
// editarEquipaje() {
//   if (this.equipajeSeleccionado) {
//     this.equipajeService.updateEquipaje(this.equipajeSeleccionado);
//     this.editMode = false;
//     alert('Equipaje actualizado con éxito');
//   }
// }
// cancelarEdicion() {
//   if (this.originalEquipaje) {
//     this.equipajeSeleccionado = { ...this.originalEquipaje };
//     this.editMode = false;
//   }
// }
// eliminarEquipaje(id: string) {
//   const confirmacion = confirm('¿Estás seguro de que deseas eliminar este equipaje?');
//   if (confirmacion) {
//     this.equipajeService.deleteEquipaje(id);
//     this.equipajeSeleccionado = undefined;
//     alert('Equipaje eliminado con éxito');
//   }
// }
// generarIdEquipaje(): string {
//   const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const numeros = '0123456789';
//   let id = '';
//   for (let i = 0; i < 3; i++) {
//     id += letras.charAt(Math.floor(Math.random() * letras.length));
//   }
//   for (let i = 0; i < 3; i++) {
//     id += numeros.charAt(Math.floor(Math.random() * numeros.length));
//   }
//   return id;
// }
// mostrarFactura(equipaje: Maleta) {
//   this.equipajeSeleccionado = equipaje;
//   const aceptar = confirm(`Factura:
//   ID: ${equipaje.id}
//   Cédula: ${equipaje.cedula}
//   Peso: ${equipaje.peso}
//   Tipo: ${equipaje.tipo}
//   Estado: ${equipaje.estado}
//   ¿Aceptar?`);
//   if (aceptar) {
//     this.equipajeSeleccionado = undefined;
//   }
// }
// toggleEditMode() {
//   this.editMode = !this.editMode;
// }
//#endregion
Number(arg0: string): number {
throw new Error('Method not implemented.');
}
  //#region Antes
  // equipajes$ = this.equipajeService.equipajes$;
  // equipajeSeleccionado?: Maleta;
  // nuevaCedula: string = '';
  // nuevoEquipaje: Maleta = this.crearEquipajeVacio();
  // usuarioValido: boolean = false;
  // editMode: boolean = false;
  // originalEquipaje?: Maleta;

  // constructor(
  //   private equipajeService: MaletaService, private usuarioService: UsuarioService, private dialog: MatDialog, 
  //   private router: Router) {}

  // crearEquipajeVacio(): Maleta {
  //   return {
  //     id: '',
  //     cedula: '',
  //     peso: 0,
  //     tipo: '',
  //     estado: 'Recibida'
  //   };
  // }

  // buscarEquipaje(id: string) {
  //   const equipaje = this.equipajeService.getEquipajeById(id);
  //   if (equipaje) {
  //     this.equipajeSeleccionado = { ...equipaje };
  //     this.originalEquipaje = { ...equipaje };
  //   } else {
  //     alert('Equipaje no encontrado');
  //   }
  // }

  // validarUsuario() {
  //   const usuario = this.usuarioService.getUsuarioByCedula(this.nuevaCedula);
  //   this.usuarioValido = !!usuario;
  //   if (!this.usuarioValido) {
  //     alert('Usuario no encontrado. Ingrese un usuario válido.');
  //   }
  // }

  // registrarEquipaje() {
  //   if (!this.usuarioValido) {
  //     alert('Por favor, valide el usuario antes de registrar el equipaje.');
  //     return;
  //   }
  //   const nuevoId = this.generarIdEquipaje();
  //   this.nuevoEquipaje.id = nuevoId;
  //   this.equipajeService.addEquipaje(this.nuevoEquipaje);
  //   alert('Equipaje registrado con éxito');
  //   this.mostrarFactura(this.nuevoEquipaje);
  //   this.nuevoEquipaje = this.crearEquipajeVacio();
  //   this.usuarioValido = false;
  // }

  // editarEquipaje() {
  //   if (this.equipajeSeleccionado) {
  //     this.equipajeService.updateEquipaje(this.equipajeSeleccionado);
  //     this.editMode = false;
  //     alert('Equipaje actualizado con éxito');
  //   }
  // }

  // cancelarEdicion() {
  //   if (this.originalEquipaje) {
  //     this.equipajeSeleccionado = { ...this.originalEquipaje };
  //     this.editMode = false;
  //   }
  // }

  // eliminarEquipaje(id: string) {
  //   const confirmacion = confirm('¿Estás seguro de que deseas eliminar este equipaje?');
  //   if (confirmacion) {
  //     this.equipajeService.deleteEquipaje(id);
  //     this.equipajeSeleccionado = undefined;
  //     alert('Equipaje eliminado con éxito');
  //   }
  // }

  // generarIdEquipaje(): string {
  //   const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   const numeros = '0123456789';
  //   let id = '';
  //   for (let i = 0; i < 3; i++) {
  //     id += letras.charAt(Math.floor(Math.random() * letras.length));
  //   }
  //   for (let i = 0; i < 3; i++) {
  //     id += numeros.charAt(Math.floor(Math.random() * numeros.length));
  //   }
  //   return id;
  // }

  // mostrarFactura(equipaje: Maleta) {
  //   this.equipajeSeleccionado = equipaje;
  //   const aceptar = confirm(`Factura:
  //   ID: ${equipaje.id}
  //   Cédula: ${equipaje.cedula}
  //   Peso: ${equipaje.peso}
  //   Tipo: ${equipaje.tipo}
  //   Estado: ${equipaje.estado}

  //   ¿Aceptar?`);
  //   if (aceptar) {
  //     this.equipajeSeleccionado = undefined;
  //   }
  // }

  // toggleEditMode() {
  //   this.editMode = !this.editMode;
  // }
//#endregion


equipajes$ = this.equipajeService.getEquipajes();
  equipajeSeleccionado?: Equipaje;
  nuevaCedula: string = '';
  nuevoEquipaje: Equipaje = this.crearEquipajeVacio();
  usuarioValido: boolean = false;
  editMode: boolean = false;
  originalEquipaje?: Equipaje;

  constructor(
    private equipajeService: EquipajeService, 
    private usuarioService: UsuarioService, 
    private dialog: MatDialog, 
    private router: Router) {}

  ngOnInit(): void {}

  crearEquipajeVacio(): Equipaje {
    return {
      id: 0,
      cedulaUsuario: '',
      peso: 0,
      tipo: '',
      estado: 'Recibida'
    };
  }

  buscarEquipaje(id: number) {
    this.equipajeService.getEquipajeById(id).subscribe(equipaje => {
      if (equipaje) {
        this.equipajeSeleccionado = { ...equipaje };
        this.originalEquipaje = { ...equipaje };
      } else {
        alert('Equipaje no encontrado');
      }
    });
  }

  validarUsuario() {
    this.usuarioService.getUsuarioByCedula(this.nuevaCedula).subscribe(usuario => {
      this.usuarioValido = !!usuario;
      if (!this.usuarioValido) {
        alert('Usuario no encontrado. Ingrese un usuario válido.');
      }
    });
  }

  registrarEquipaje() {
    if (!this.usuarioValido) {
      alert('Por favor, valide el usuario antes de registrar el equipaje.');
      return;
    }
    // Asignar la cédula del usuario validado al nuevo equipaje
    this.nuevoEquipaje.cedulaUsuario = this.nuevaCedula;
    this.equipajeService.addEquipaje(this.nuevoEquipaje).subscribe(() => {
      alert('Equipaje registrado con éxito');
      this.mostrarFactura(this.nuevoEquipaje);
      this.nuevoEquipaje = this.crearEquipajeVacio();
      this.usuarioValido = false;
    });
  }

  editarEquipaje() {
    if (this.equipajeSeleccionado) {
      this.equipajeService.updateEquipaje(Number(this.equipajeSeleccionado.id), this.equipajeSeleccionado).subscribe(() => {
        this.editMode = false;
        alert('Equipaje actualizado con éxito');
      });
    }
  }

  cancelarEdicion() {
    if (this.originalEquipaje) {
      this.equipajeSeleccionado = { ...this.originalEquipaje };
      this.editMode = false;
    }
  }

  eliminarEquipaje(id: number) {
    const confirmacion = confirm('¿Estás seguro de que deseas eliminar este equipaje?');
    if (confirmacion) {
      this.equipajeService.deleteEquipaje(id).subscribe(() => {
        this.equipajeSeleccionado = undefined;
        alert('Equipaje eliminado con éxito');
      });
    }
  }

  mostrarFactura(equipaje: Equipaje) {
    this.equipajeSeleccionado = equipaje;
    const aceptar = confirm(`Factura:
    ID: ${equipaje.id}
    Cédula: ${equipaje.cedulaUsuario}
    Peso: ${equipaje.peso}
    Tipo: ${equipaje.tipo}
    Estado: ${equipaje.estado}

    ¿Aceptar?`);
    if (aceptar) {
      this.equipajeSeleccionado = undefined;
    }
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

}