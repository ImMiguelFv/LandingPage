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

  formUser = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    postalcode: new FormControl('', [
      postalCodeValidator() // Usando el validador personalizado
    ]),    locality: new FormControl('', Validators.required),
    province: new FormControl('', Validators.required),
  });
  name = new  FormControl('', Validators.required);
  email = new  FormControl('', [Validators.required, Validators.email]);
  address = new  FormControl('', Validators.required);
  postalcode = new FormControl('', [
    postalCodeValidator() // Usando el validador personalizado
  ]);
  locality = new  FormControl('', [Validators.required]);
  province = new  FormControl('', [Validators.required]);
  // Método para manejar el envío del formulario
  constructor(private supabaseService: SupabaseService) {}

  // Método para manejar el envío del formulario
  async onSubmit() {
    if (this.formUser.valid) {
      const formData = this.formUser.value;

      try {
        // Llamar al servicio de Supabase para registrar los datos
        const result = await this.supabaseService.registrarSuscripcion(formData);
        console.log('Suscripción exitosa:', result);
        alert('El proceso de envío tardará aproximadamente 1 semana. ¡Qué disfrute la prueba!');
        this.formUser.reset();  // Opcional: Resetea el formulario después de enviarlo
      } catch (error) {
        console.error('Error al enviar la suscripción:', error);
        alert('Hubo un error al registrar la suscripción.');
      }
    } else {
      console.log('Formulario no enviado. Verifica los datos.');
      
    }
  }
  
}
export function postalCodeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

  

    const isNumeric = /^[0-9]*$/.test(value);
    const isFiveDigits = value.length === 5;

    // Retorna errores específicos
    if (!value) {
      return { required: true }; // Si está vacío
    }
    if (!isNumeric) {
      return { pattern: true }; // Solo debe contener números
    }
    if (!isFiveDigits) {
      return { length: true }; // Debe ser de exactamente 5 dígitos
    }

    return null; // Sin errores
  };
}
