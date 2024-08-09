import { Component, OnInit } from '@angular/core';
import { Comentario } from '../../../Model/Usuario/Comentario';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ComentarioService } from '../../../Services/Usuario/comentarios.service';
import { UsuarioService } from '../../../Services/Usuario/usuario.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent /*implements OnInit */{
  //#region Antes
//   comentarios: Comentario[] = [];
//   usuarioCedula: string | undefined;
//   comentarioControl: FormControl;
//   usuarioNombre: string | undefined;
//   editForm: FormGroup;
//   newCommentForm: FormGroup;
//   editState: { [key: number]: boolean } = {}; 

//   constructor(
//     private comentarioService: ComentarioService,private usuarioService: UsuarioService, private fb: FormBuilder
//   ) {
//     this.editForm = this.fb.group({
//       comentario: ['']
//     });
//     this.newCommentForm = this.fb.group({
//       comentario: ['']
//     });

//  this.editForm = this.fb.group({
//     comentario: ['']
//   });
//   this.comentarioControl = this.editForm.get('comentario') as FormControl;
// }

//   ngOnInit(): void {
//     this.usuarioCedula = this.usuarioService.getCurrentCedula();
//     const usuario = this.usuarioCedula ? this.usuarioService.getUsuarioByCedula(this.usuarioCedula) : undefined;
//     this.usuarioNombre = usuario?.nombre;
//     this.comentarios = this.comentarioService.getComentarios();
//   }

//   agregarComentario(): void {
//     const nuevoComentario: string = this.newCommentForm.value.comentario;
//     if (nuevoComentario && this.usuarioCedula) {
//       this.comentarioService.agregarComentario(nuevoComentario, this.usuarioCedula);
//       this.comentarios = this.comentarioService.getComentarios();
//       this.newCommentForm.reset();
//     }
//   }

//   activarEdicion(id: number): void {
//     this.editState[id] = true;
//     const comentario = this.comentarioService.getComentarioById(id);
//     if (comentario) {
//       this.editForm.patchValue({ comentario: comentario.comentario });
//     }
//   }

//   guardarEdicion(id: number): void {
//     const nuevoComentario = this.editForm.value.comentario;
//     if (nuevoComentario) {
//       this.comentarioService.actualizarComentario(id, nuevoComentario);
//       this.comentarios = this.comentarioService.getComentarios();
//       this.editState[id] = false;
//     }
//   }

//   eliminarComentario(id: number): void {
//     this.comentarioService.eliminarComentario(id);
//     this.comentarios = this.comentarioService.getComentarios();
//   }

//   getUsuarioNombre(cedula: string): string | undefined {
//     const usuario = this.usuarioService.getUsuarioByCedula(cedula);
//     return usuario ? usuario.nombre : undefined;
//   }
  //#endregion
}