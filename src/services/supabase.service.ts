import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    const SUPABASE_URL = 'https://khusecrskpxvxqotvlww.supabase.co';
    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtodXNlY3Jza3B4dnhxb3R2bHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxNjYwOTksImV4cCI6MjA0Mjc0MjA5OX0.eN5E90YrhJUkrG5hjjEsp0_BwIH4rT8gBxhNdsypNQ4';
    
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