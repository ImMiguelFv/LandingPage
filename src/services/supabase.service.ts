import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment.prod'; // 


@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    const SUPABASE_URL = environment.supabaseUrl;
    const SUPABASE_KEY = environment.supabaseKey;
    
    // Inicializa Supabase
    this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  // Método para insertar datos en la tabla "suscripciones"
  async registrarSuscripcion(datos: any) {
    try {
      const { data, error } = await this.supabase
        .from('suscripciones') // Nombre de la tabla
        .insert([datos]);

      if (error) {
        console.error('Error al registrar suscripción:', error);
        throw error;
      }

      return data; // Devuelve los datos insertados
    } catch (error) {
      console.error('Error en registrarSuscripcion', error);
      throw error; // Propaga el error para manejarlo en el componente
    }
  }

}
