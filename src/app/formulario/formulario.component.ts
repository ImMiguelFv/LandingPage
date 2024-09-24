import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupabaseService } from '../../services/supabase.service'; // Importar el servicio de Supabase

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  // Definir los controles dentro de FormGroup
  formUser = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    postalcode: new FormControl('', [
      postalCodeValidator() // Usando el validador personalizado
    ]),    
    locality: new FormControl('', Validators.required),
    province: new FormControl('', Validators.required),
  });

  // Constructor con inyección de servicio Supabase
  constructor(private supabaseService: SupabaseService) {}

  // Método para manejar el envío del formulario
  async onSubmit() {
    if (this.formUser.valid) {
      const formData = this.formUser.value; // Acceder a los valores del formulario

      try {
        // Llamar al servicio de Supabase para registrar los datos
        const result = await this.supabaseService.registrarSuscripcion(formData);
        console.log('Suscripción exitosa');
        alert('El proceso de envío tardará aproximadamente 1 semana. ¡Qué disfrute la prueba!');
        this.formUser.reset(); // Esto restablece todos los campos del formulario

      } catch (error) {
        console.error('Error al registrar suscripción:', error);
      }
    } else {
      console.log('Formulario no enviado. Verifica los datos.');
    }
  }
}

// Validador personalizado para el código postal
export function postalCodeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    // Si el valor es null o vacío, retorna requerido
    if (!value) {
      return { required: true }; 
    }

    const isNumeric = /^[0-9]*$/.test(value);
    const isFiveDigits = value.length === 5;

    // Retorna errores específicos
    if (!isNumeric) {
      return { pattern: true }; // Solo debe contener números
    }
    if (!isFiveDigits) {
      return { length: true }; // Debe ser de exactamente 5 dígitos
    }

    return null; // Sin errores
  };
}
