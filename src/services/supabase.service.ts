import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    const SUPABASE_URL = 'https://khusecrskpxvxqotvlww.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtodXNlY3Jza3B4dnhxb3R2bHd3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNzE2NjA5OSwiZXhwIjoyMDQyNzQyMDk5fQ.8IFPlCmoB2iGwBFsCcwaygHiB9FjaITIfoPSqy_G1KE';
    
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
