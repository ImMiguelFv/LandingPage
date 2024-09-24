import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    // Reemplaza estos valores con tus credenciales de Supabase
    const SUPABASE_URL = 'https://khusecrskpxvxqotvlww.supabase.co';
    const SUPABASE_KEY = 'e4tdUWBoeoJeQTrc';
    
    // Inicializa Supabase
    this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  }
  // Método para insertar datos en la tabla "suscripciones"
  async registrarSuscripcion(datos: any) {
    const { data, error } = await this.supabase
      .from('suscripciones') // Nombre de la tabla
      .insert([datos]);

    if (error) {
      console.error('Error al registrar suscripción:', error);
      throw error;
    }

  }
}