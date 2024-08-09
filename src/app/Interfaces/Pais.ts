import { Ciudad } from "./Ciudad";

export interface Pais{
    id: number; // Unique identifier for the country
  nombre: string; // Name of the country
  codigoPais: string; // Country code (e.g., ESP, FRA, USA)
  ciudades: Ciudad[]; // Array of cities belonging to this country
}