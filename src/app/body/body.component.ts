import { Component } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component'

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}