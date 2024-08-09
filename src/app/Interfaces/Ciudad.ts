import { Pais } from "./Pais";

export interface Ciudad {
    id: number; 
  nombre: string; 
  pais: Pais; // Referencia de la interfaz pais
}
