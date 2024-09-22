import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
formUser = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  address: new FormControl('', Validators.required),
  postalcode: new FormControl('', [Validators.required]),
  locality: new FormControl('', [Validators.required]),
  province: new FormControl('', [Validators.required]),
})
name = new  FormControl('', Validators.required);
email = new  FormControl('', [Validators.required, Validators.email]);
address = new  FormControl('', Validators.required);
postalcode = new  FormControl('', [Validators.required]);
locality = new  FormControl('', [Validators.required]);
province = new  FormControl('', [Validators.required]);


onsubmit(){
  if (this.formUser.valid) {
    console.log("Formulario enviado");
    alert("El proceso de envio tardará aproximadamente 1 semanas. Qué disfrute la prueba.");
  } else {
  console.log("Formulario no enviado")
  }
  }
}