import { Injectable } from '@angular/core';
import { Comentario } from '../../Model/Usuario/Comentario';


@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private comentarios: Comentario[] = [
    new Comentario(1, 'Este es un comentario de prueba', '123456789'),
    new Comentario(2, 'Otro comentario para probar', '987654321'),
    new Comentario(3, 'Un tercer comentario', '000000000'),
    new Comentario(4, 'Cuarto comentario de ejemplo', '111111111'),
    new Comentario(5, 'Quinto comentario de ejemplo', '123456789')
  ];

  getComentarios(): Comentario[] {
    return this.comentarios;
  }

  getComentarioById(id: number): Comentario | undefined {
    return this.comentarios.find(comentario => comentario.id === id);
  }

  agregarComentario(comentario: string, usuario: string): void {
    const id = this.comentarios.length? Math.max(...this.comentarios.map(c => c.id)) + 1 : 1;
    const nuevoComentario = new Comentario(id, comentario, usuario);
    this.comentarios.unshift(nuevoComentario);
  }

  actualizarComentario(id: number, nuevoComentario: string): void {
    const comentario = this.getComentarioById(id);
    if (comentario) {
      comentario.comentario = nuevoComentario;
    }
  }

  eliminarComentario(id: number): void {
    const index = this.comentarios.findIndex(comentario => comentario.id === id);
    if (index !== -1) {
      this.comentarios.splice(index, 1);
    }
  }
}
