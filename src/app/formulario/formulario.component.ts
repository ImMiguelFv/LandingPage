import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    address: new FormControl(''),
    postalCode: new FormControl(''),
    locality: new FormControl(''),
    autonomousCommunity: new FormControl(''),
  });

  onSubmit() {
    if (this.formUser.valid) {
      // Obtén los datos del formulario
      const userData = this.formUser.value;
      
      // Aquí puedes hacer algo con los datos, como enviarlos a tu API
      console.log('Formulario enviado:', userData);
      
      // Ejemplo de cómo podrías llamar a un servicio para enviar los datos:
      // this.usuarioService.guardarUsuario(userData).subscribe(response => {
      //   console.log('Datos guardados:', response);
      // }, error => {
      //   console.error('Error al guardar datos:', error);
      // });
    } else {
      console.log('Formulario no válido');
    }
  }
}
